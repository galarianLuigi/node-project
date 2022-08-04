const fs = require('fs');

module.exports = function () {
  process.stdout.write('prompt > ');

  process.stdin.on('data', data => {
    const cmd = data.toString().trim();
    if (cmd.slice(0, 3) === 'cat') {
      process.stdout.write(fs.readFile(cmd.slice(4)));
      process.stdout.write('\nprompt > ');
    }
  });
};
