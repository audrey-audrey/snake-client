const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */

const connect = function() {
  // creating a connection with server (specified host and port)
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  // we should see a message sent to us from the server
  conn.on('data', data => console.log(data));

  // on the event that a connection event is made, print a message on screen
  conn.on('connect', () => console.log("Succesfully connected to game server!"));

  // send message to server, can also register more 'connect' callbacks for each message
  conn.on('connect', () => {
    // Name
    conn.write('Name: ODD');
  });

  return conn;
};

// Using ES6 object shorthand to export connect
module.exports = {connect};