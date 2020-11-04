// play.js
// require connect to connect to game server
const {connect} = require('./client');
const {setupInput} = require('./input');

console.log('Connecting ...');

// connect(); => is this needed? No, we only need to pass a connection to setupInput

// returned object from connect() as parameter in setupInput
setupInput(connect());