/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // handle input with stdin
  stdin.on('data', handleUserInput);

  return stdin;
}

// setupInput()
const handleUserInput = function(key) {
  if (key === '\u0003') {
    // \u0003 maps to ctrl+c input which exits the process
    process.exit();
  }
}

module.exports = {setupInput};