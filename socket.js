//socket
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http, {path:'/andy/socket.io'})
var users=[],teams=[];
var o = {
	moveTimer:'',
	moveDis:0,
	moveSpeed:2,
	moveNowDis:0,
	allY:0,
	imgH:0,
	maxW:0
};

app.use('/andy', express.static(__dirname + '/dist'));

io.on('connect', function(socket){
	users.push(socket);

	socket.emit('ioAlert',{msg:'v 0.1'});
	
	socket.on('userData', function(data){
		var n = searhUserIndex(socket.id);
		users[n].uWidth = data.w;
		users[n].uHeight = data.h;
	});

	socket.on('imgReady', function(data){
		io.emit('imgReady', { url: data.url });
	});
	socket.on('imgGo', function(data){
		o.imgH = imgHCount();
		o.allY = 0;
		for(var i=0; i<users.length; i++){
			if(users[i].uWidth > o.maxW ) o.maxW = users[i].uWidth;
		}
		for(var i=0; i<users.length; i++){
			var ml = (o.maxW - users[i].uWidth)/2;
			users[i].emit('imgGo',{h:o.imgH,y:o.allY,ml:ml});
			o.allY -= users[i].uHeight;
		}
	});

	socket.on('start', function(data){
		o.moveDis = data.width + o.maxW;
		o.moveNowDis = 0;
		// ImgMove();
		io.emit('imgMove', { d:o.moveDis });
	});

	socket.on('imgNoGo', function(){
		io.emit('imgNoGo', { for: 'everyone' });
	});
	
	socket.on('disconnect', function(){
		var i = searhUserIndex(socket.id);
	    users.splice(i,1);
	});

	socket.on('reload',function(){
		io.emit('reload');
	});
	
});

function ImgMove(){
	// if( o.moveNowDis >= o.moveDis ){
	// 	clearTimeout(o.moveTimer);
	// 	// io.emit('imgMoveEnd');
	// }else{
	// 	o.moveNowDis +=o.moveSpeed;
	// 	io.emit('imgMove', { d:o.moveNowDis });
	// 	o.moveTimer = setTimeout(ImgMove,1);
	// }
}
function imgHCount(){
	var imgHieght = 0;
	for(i in users){
		imgHieght += users[i].uHeight;
	}

	return imgHieght
}
function searhUserIndex(_id){
	var _thisuser;
	for(var j in users){
		if(users[j].id == _id) _thisuser = j;
	}
	return _thisuser;
}
function searhUser(_id){
	var _thisuser;
	for(var j in users){				
		if(users[j].id == _id) _thisuser = users[j];
	}
	return _thisuser;
}

http.listen(3009, function(){
	console.log('listening on *:3009');
});
