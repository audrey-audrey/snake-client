// play.js
// require connect to connect to game server
const {connect} = require('./client');
const {setupInput} = require('./input');

console.log('Connecting ...');
connect();

setupInput();