'use strict';

const Koa = require('koa');
const app = new Koa();

const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);

io.on('connection', function(){
  console.log('on connected!')
});

server.listen(3000);
