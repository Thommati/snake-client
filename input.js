let connection;

const handleUserInput = function(key) {
  switch (key) {
  case '\u0003':
    process.exit();
    break;
  case 'w':
    connection.write('Move: up');
    break;
  case 'a':
    connection.write('Move: left');
    break;
  case 's':
    connection.write('Move: down');
    break;
  case 'd':
    connection.write('Move: right');
    break;
  case 'r':
    connection.write('Say: Beep!');
    break;
  case 'e':
    connection.write('Say: Nom nom');
    break;
  }
}

const setupInput = conn => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = { setupInput };
