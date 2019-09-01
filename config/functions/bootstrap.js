'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 */

module.exports = cb => {
  // import socket io
  var io = require('socket.io')(strapi.server);
  // listen for user connection
  io.on('connection', function(socket){
    // send message on user connection
    socket.emit('hello', JSON.stringify({message: 'Hello food lover'}));
    // listen for user diconnect
    socket.on('disconnect', () => console.log('a user disconnected'));
  });
  strapi.io = io; // register socket io inside strapi main object to use it globally anywhere
  cb();
};
