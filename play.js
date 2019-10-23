// const net = require('net');

const { connect } = require('./client');

// /**
//  * Establishes connection with the game server
//  */
// const connect = function() {
//   const conn = net.createConnection({ 
//     host: '172.46.2.204',
//     port: 50541
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8'); 
//   conn.on('data', () => {
//     console.log("you ded cuz you idled");
//   })

//   return conn;
// }

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', function(key) {
    handleUserInput(key);
  });
  stdin.resume();
  return stdin;
}

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput();

console.log('Connecting ...');
connect();