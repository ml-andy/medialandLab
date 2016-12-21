//socket

var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var users=[],teams=[];
var o = {
	moveTimer:'',
	moveDis:0,
	moveSpeed:2,
	moveNowDis:0,
	allY:0,
	imgH:0
};



app.use(express.static(__dirname + '/andy'));
__dirname = __dirname +'';
app.get('/', function(req, res){
	res.sendFile(__dirname + '/andy/index.html');
});

io.on('connection', function(socket){
	users.push(socket);

	searhUser(socket.id).emit('ioAlert',{msg:'v 0.17'});
	
	socket.on('userData', function(data){
		var n = searhUserIndex(socket.id);
		users[n].uWidth = data.w;
		users[n].uHeight = data.h;
	});

	socket.on('imgGo', function(data){
		o.imgH = imgHCount();
		o.allY = 0;
		for(var i=0; i<users.length; i++){
			users[i].emit('imgGo',{h:o.imgH,y:o.allY});
			o.allY -= users[i].uHeight;
		}
	});

	socket.on('start', function(data){
		o.moveDis = data.width;
		o.moveNowDis = 0;
		ImgMove();
	});

	socket.on('imgNoGo', function(){
		io.emit('imgNoGo', { for: 'everyone' });
	});
	
	socket.on('disconnect', function(){
		var i = searhUserIndex(socket.id);
	    users.splice(i,1);
	});
	
});

function ImgMove(){
	if( o.moveNowDis >= o.moveDis ){
		clearTimeout(o.moveTimer);
	}else{
		o.moveNowDis +=o.moveSpeed;
		io.emit('imgMove', { d:o.moveNowDis });
		o.moveTimer = setTimeout(ImgMove,1);
	}
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
	return j;
}
function searhUser(_id){
	var _thisuser;
	for(var j in users){				
		if(users[j].id == _id) _thisuser = users[j];
	}
	return _thisuser;
}
http.listen(8787, function(){
	console.log('listening on *:8787');
});
