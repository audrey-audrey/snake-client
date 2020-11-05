const { messages } = require('./constants');

// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  // connection is now defined with the input object (see return from connect function in client.js)
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // handle input with stdin
  stdin.on('data', handleUserInput); // ==> We don't need to pass on a parameter to handleUserInput stdin.on('data',...) automatically passes on data as parameter

  // sending movement commands
  // conn.on('data', (data) => handleUserInput(data, connection)); => we don't need this

  return stdin;
};

// setupInput()
const handleUserInput = function(key) {
    // Exit
    // \u0003 maps to ctrl+c input which exits the process
    if(key === '\u0003') process.exit();

  // Sending commands and messages
  // if messages has key, send out value!
  if(messages.hasOwnProperty(key)) connection.write(messages[key]);
};

module.exports = {setupInput};