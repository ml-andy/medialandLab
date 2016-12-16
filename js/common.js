$(document).ready(function(){
    var socket = io();

    socket.on('ioAlert',function(data){
        console.log(data.msg);
    });
    socket.on('imgGo',function(data){
        $('.wrapper img').addClass('on');
        
    });
    
    $(window).load(function(){
        $('.wrapper .word').html($(window).height());
        $('.wrapper .word').click(function(){
            socket.emit('imgGo');
        });
    });

})//ready end
function getUrlVars(){
    var vars=[],hash;var hashes=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
    for(var i=0;i<hashes.length;i++){hash=hashes[i].split('=');vars.push(hash[0]);vars[hash[0]]=hash[1]}
    return vars
}
