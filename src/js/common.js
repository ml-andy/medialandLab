$(document).ready(function(){
    var socket = io('http://lab.medialand.com.tw', {path:'/andy/socket.io'});
    var o={
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
    
    $('.wrapper .word').click(function(){
        if(o.word.hasClass('on')){
            socket.emit('start',{width:o.mainImg.width()+$(window).width()});
        }
        else{
            socket.emit('imgGo');
        }
    });

    $(window).load(function(){
        
    });
    

})//ready end
function getUrlVars(){
    var vars=[],hash;var hashes=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
    for(var i=0;i<hashes.length;i++){hash=hashes[i].split('=');vars.push(hash[0]);vars[hash[0]]=hash[1]}
    return vars
}
