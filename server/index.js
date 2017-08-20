'use strict';

const Koa = require('koa');
const app = new Koa();

const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);

io.on('connection', function(socket){
  console.log('on connected!');

  socket.on('message', function(message) {
    console.log(message);
    io.emit(message.room, {
      text: message.text,
      from: message.from
    });
  });
});

server.listen(3000);
