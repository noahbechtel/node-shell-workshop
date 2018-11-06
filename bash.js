process.stdout.write('prompt > ');
process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  // if(cmd==='pwd'){
  //     pwd();
  // } else if ('cmd' )

  switch (cmd) {
    case 'pwd':
      pwd();
      break;
    case 'ls':
      ls();
      break;
    default:
  }

  //process.stdout.write('\nprompt > ');
});
const pwd = require('./pwd');
const ls = require('./ls');
