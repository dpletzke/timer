const times = process.argv.slice(2).map(t => Number(t)); 
const printDot = () => {
  process.stdout.write('.\n');
}

if(times.length > 0) {
  for(time of times) {
    if(time < 0 || Number.isNaN(time)) { continue; }
    else setTimeout(printDot, time);
  }
}
