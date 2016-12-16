//socket

var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var users=[],teams=[];



app.use(express.static(__dirname + '/andy'));
__dirname = __dirname +'';
app.get('/', function(req, res){
	res.sendFile(__dirname + '/andy/index.html');
});

io.on('connection', function(socket){
	users.push(socket);
	console.log('user:'+socket.id+' connected');
	searhUser(socket.id).emit('ioAlert',{msg:'v 0.17'});
	
	socket.on('imgGo', function(){
		io.emit('imgGo', { for: 'everyone' });
	});
	
	socket.on('disconnect', function(){
	    console.log('user:'+socket.id+' disconnected');
	    
	});
	// socket.on('enterRoom', function(data){
		
	// });
	// socket.on('createTeam', function(teamsdata){
		
	// });
	
	

});
function searhUser(_id){
	var _thisuser;
	for(var j in users){				
		if(users[j].id == _id) _thisuser = users[j];
	}
	return _thisuser;
}
http.listen(3000, function(){
	console.log('listening on *:3000');
});
