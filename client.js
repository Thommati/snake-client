const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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
