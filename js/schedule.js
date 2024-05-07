const fs = require('fs')

function schedulingChallenge(filename) {
  const data = fs.readFileSync(filename, 'utf8');
  console.log(data);
}


const filename = 'test.txt'
schedulingChallenge(filename)