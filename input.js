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
  // \u0003 maps to ctrl+c input which exits the process
  if (key === '\u0003') {
    process.exit();
  }

  // 'w' for up etc....
  switch (key) {
  case 'w':
    //  You don't need to write conn.on('connection', .....) because a connection has already
    // been established, it wont establish another connection so it wont execute
    connection.write('Move: up');
    break;
  case 'a':
    connection.write('Move: left');
    break;
  case 's':
    connection.write('Move: down');
    break;
  case 'd':
    connection.write('Move: right');
  }

};

module.exports = {setupInput};