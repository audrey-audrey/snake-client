const IP = '10.0.2.15';
const PORT = 50541;

const messages = {
  // Commands
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: right',
  d: 'Move: down',

  // Special messages
  '1': 'Say: MUAHAHA',
  '2': 'Say: Nooo'
}

module.exports = {
  IP,
  PORT, 
  messages
};