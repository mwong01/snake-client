const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
  });
  // confirming connection to server
  conn.on('connect', function() {
    console.log('Successfully connected to game server');
    conn.write("Name: @@@");
    setTimeout(() => {
      conn.write("Move: left");
    }, 50);
    setInterval(() => {
      conn.write("Move: down");
    }, 50);
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