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

  // send message to server, can also register more 'connect' callbacks for each message
  conn.on('connect', () => {
    // Name
    conn.write('Name: ODD');
    // Commands
    // setInterval(() => conn.write('Move: up'), 500);
    // setTimeout(() => conn.write('Move: left'), 1000);
    // setTimeout(() => conn.write('Move: down'), 1500);
    // setTimeout(() => conn.write('Move: left'), 2000);
  });

  return conn;
};

// Using ES6 object shorthand to export connect
module.exports = {connect};