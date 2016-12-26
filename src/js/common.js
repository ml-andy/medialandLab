$(document).ready(function(){
    var socket = io('http://lab.medialand.com.tw', {path:'/andy/socket.io'});
    var o={
        wrapper:$('.wraper'),
        mainImg: $('.mainImg'),
        word:$('.wrapper .word'),
        ml:0,
        time:3
    };


    //socket
    socket.on('ioAlert',function(data){
        console.log(data.msg);
        socket.emit('userData',{ h:$(window).height(),w:$(window).width() });
    });
    socket.on('imgReady', function(data){
        o.mainImgUrl = data.url;
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
        console.log(data);
        o.ml = $(window).width() + data.ml;
        o.mainImg
        .css({
            'height': data.h,
            'width': 'auto',
            'top': data.y,
            'left': o.ml
        });
    });
    socket.on('imgMove',function(data){
        o.mainImg.animate({'left': data.d*-1},3000);
    });
    socket.on('reload',function(data){
        location.reload();
    });

    //js
    $('.submit').click(function(){
        socket.emit('imgReady',{url:$('.imgUrl').val()});
    });
    $('.wrapper .word').click(function(){
        o.word.hide();
        count();
    });
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
    
    function count(){
        o.time-=1;
        playSound(true,'count1');
        setTimeout(function(){
            if(o.time==0){
                playSound(true,'count2');
                socket.emit('start',{width:o.mainImg.width()});
            }else count();
        },1000);
    }
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

})//ready end
function getUrlVars(){
    var vars=[],hash;var hashes=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
    for(var i=0;i<hashes.length;i++){hash=hashes[i].split('=');vars.push(hash[0]);vars[hash[0]]=hash[1]}
    return vars
}
