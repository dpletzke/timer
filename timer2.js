const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
  else if(key.name === 'b') {
    printDot();
  }
  else if(!Number.isNaN(Number(key.name))) {
    const seconds = Number(key.name);
    setTimeout(announceTimer(seconds), 1000 * seconds);
  }
});

const announceTimer = (seconds) => {
  console.log(`setting timer for ${seconds} seconds`);
  return printDot;
}

const printDot = () => {
  process.stdout.write('.\n');
}