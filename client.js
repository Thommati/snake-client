const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });

  conn.setEncoding('utf8');

  conn.on('data', (message) => {
    console.log(message);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server.');
    conn.write('Name: MT7');
  });

  return conn;
};

module.exports = { connect };
