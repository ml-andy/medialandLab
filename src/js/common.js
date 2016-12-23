$(document).ready(function(){
    var socket = io('http://lab.medialand.com.tw', {path:'/andy/socket.io'});
    var o={
        wrapper:$('.wraper'),
        mainImg: $('.mainImg'),
        word:$('.wrapper .word')
    };

    socket.on('ioAlert',function(data){
        console.log(data.msg);
        socket.emit('userData',{ h:$(window).height(),w:$(window).width() });
    });
    socket.on('imgGo',function(data){
        o.word.addClass('on');
        console.log(data);
        o.mainImg
        .css({
            'height': data.h,
            'width': 'auto',
            'top': data.y,
            'left': $(window).width()
        });
    });
    socket.on('imgMove',function(data){
        o.mainImg.css({'left': $(window).width()-data.d})
    });
    socket.on('reload',function(data){
        location.reload();
    });
    
    $('.wrapper .word').click(function(){
        if(o.word.hasClass('on')){
            o.word.hide();
            $('body').addClass('on');
            socket.emit('start',{width:o.mainImg.width()+$(window).width()});
        }
        else{
            socket.emit('imgGo');
        }
    });
    // $('body').click(function(){
    //     if($(this).hasClass('on')) socket.emit('reload');
    // });
    

    $(window).load(function(){
        showLoading(false);
    });
    
    function showLoading(_t){
        if(_t) $('.loading').addClass('on').fadeIn();
        else $('.loading').removeClass('on').fadeOut();
    }

})//ready end
function getUrlVars(){
    var vars=[],hash;var hashes=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
    for(var i=0;i<hashes.length;i++){hash=hashes[i].split('=');vars.push(hash[0]);vars[hash[0]]=hash[1]}
    return vars
}
