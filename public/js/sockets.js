// var socket = io.connect('/');
var socket = io();
  $('form').submit(function(){
    socket.emit('chat message', $('#message').val());
    $('#message').val('');
    return false;
  });
