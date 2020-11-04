const net = require('net');

/**
 * Establishes connection with the game server
 */

const connect = function() {
  // creating a connection with server (specified host and port)
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  // we should see a message sent to us from the server
  conn.on('data', data => console.log(data));

  // on the event that a connection event is made, print a message on screen
  conn.on('connect', () => console.log("Succesfully connected to game server!"));

  // on the event that a connection event is made, send our Name message to server
  conn.on('connect', () => conn.write('Name: AUD'));

  return conn;
}

// Using ES6 object shorthand to export connect
module.exports = {connect};