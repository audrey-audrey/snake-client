// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  // connection
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // handle input with stdin
  stdin.on('data', handleUserInput);

  // sending movement commands
  // conn.on('data', (data) => handleUserInput(data, connection));

  return stdin;
};

// setupInput()
const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input which exits the process
  if (key === '\u0003') {
    process.exit();
  }

  switch (key) {
  case 'w':
    connection.write('Move: up');
    //  console.log('up');
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