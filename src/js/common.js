$(document).ready(function(){

/*
 __  .__   __.  __  .___________.
|  | |  \ |  | |  | |           |
|  | |   \|  | |  | `---|  |----`
|  | |  . `  | |  |     |  |     
|  | |  |\   | |  |     |  |     
|__| |__| \__| |__|     |__|     

*/
    var socket = io('http://lab.medialand.com.tw', {path:'/andy/socket.io'});
    var o={
        wrapper:$('.wraper'),
        mainImg: $('.mainImg'),
        word:$('.wrapper .word'),
        hasToHide:$('.hasToHide'),
        ml:0,
        num:0,
        time:1
    };


/*   _______.  ______     ______  __  ___  _______ .___________.
    /       | /  __  \   /      ||  |/  / |   ____||           |
   |   (----`|  |  |  | |  ,----'|  '  /  |  |__   `---|  |----`
    \   \    |  |  |  | |  |     |    <   |   __|      |  |     
.----)   |   |  `--'  | |  `----.|  .  \  |  |____     |  |     
|_______/     \______/   \______||__|\__\ |_______|    |__|    
*/
    socket.on('ioAlert',function(data){
        console.log(data.msg);
        socket.emit('userData',{ h:$(window).height(),w:$(window).width() });
    });
    socket.on('imgReady', function(data){
        o.mainImgUrl = data.url;
        o.num = data.num;
        $('.step2 .number').html(o.num);
        initToStart();
        showLoading(true);
        $('.step1').fadeOut();
        o.mainImg.attr('src',o.mainImgUrl).on('load',function(){
            showLoading(false);
            socket.emit('imgGo');
        }).each(function() {
            if(this.complete) $(this).load();
        });
    });
    socket.on('imgGo',function(data){
        o.word.addClass('on');
        // console.log(data);
        o.ml = $(window).width() + data.ml;
        o.mainImg
        .css({
            'height': data.h,
            'width': 'auto',
            'top': data.y,
            'left': o.ml
        });
    });
    socket.on('countToGo',function(data){
        o.hasToHide.hide();
        setTimeout(function(){
            playSound(true,'count1');
            if(o.num == data.num) socket.emit('start',{width:o.mainImg.width()});
        },1000);
    });
    socket.on('imgMove',function(data){
        o.humanWalkDis = data.d / 56; //1 cm = 56 px
        o.humanWalkStep = Math.ceil(o.humanWalkDis / 25); //1 step = 25cm
        o.imgMoveTime = Math.floor(o.humanWalkDis * 20); //100 cm = 2 sec, 1 cm = 20 msec
        countStep();
        o.mainImg.animate({'left': data.d*-1},o.imgMoveTime,function(){
            socket.emit('finish');
        });
    });
    socket.on('finish',function(){
        $('.step3').fadeIn();
    });


/*
       __       _______.
      |  |     /       |
      |  |    |   (----`
.--.  |  |     \   \    
|  `--'  | .----)   |   
 \______/  |_______/    

*/
    $(window).load(function(){
        showLoading(false);
        $("audio").each(function(i, e){
            $(e).get(0).play();
        });
        setTimeout(function() {
            $("audio").each(function(i, e){
                if($(e).prop('id') == 'button') return;
                var audio = $(e).get(0);
                audio.pause();
                audio.muted = false;
            });
        }, 300);
    });
    $('.submit').click(function(){
        playSound(true,'count1');
        socket.emit('imgReady',{url:$('.imgUrl').val()});
    });
    $('.wrapper .word').click(function(){
        socket.emit('countToGo');
    });
    $('.back').click(init);
    $('.again').click(function(){
        socket.emit('imgReady',{url:$('.imgUrl').val()});
    });
    
    
    function showLoading(_t){
        if(_t) $('.loading').addClass('on').fadeIn();
        else $('.loading').removeClass('on').fadeOut();
    }
    function playSound(_t,_txt){
        if(_t){
            try{$("#"+_txt)[0].play();}catch(err){}
        }else{
            try{$("#"+_txt)[0].pause();}catch(err){}
        }
    }
    function initToStart(){
        o.hasToHide.show();
        $('.step3').hide();
    }
    function init(){
        $('.step3').fadeOut();
        $('.step1').fadeIn();
    }
    function countStep(){
        o.humanWalkStep -=1;
        setTimeout(function(){
            if(o.humanWalkStep>0){
                countStep();
                playSound(true,'count1');
            }
        },500);
    }

})//ready end
function getUrlVars(){
    var vars=[],hash;var hashes=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
    for(var i=0;i<hashes.length;i++){hash=hashes[i].split('=');vars.push(hash[0]);vars[hash[0]]=hash[1]}
    return vars
}
