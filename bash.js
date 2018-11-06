process.stdout.write('prompt > ');
process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  cmd=cmd.split(" ")
  if(cmd[0]==='pwd'){
      pwd();
  }
  if (cmd[0]==='ls'){
      ls();
  }
  if(cmd[0]==='cat'){
      cat(cmd[1]);
  }

  //process.stdout.write('\nprompt > ');
});
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat')

