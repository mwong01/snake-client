const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', () => {
    console.log("you ded cuz you idled");
  })

  return conn;
}

module.exports = {
  connect
};