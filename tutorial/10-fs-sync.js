const {readFileSync, writeFileSync, write} = require('fs');
console.log('start');
const first = readFileSync('./content/subcontent/first.txt','utf8');
const second = readFileSync('./content/subcontent/second.txt','utf8');
//To overwrite file
//writeFileSync('./content/subcontent/result-sync.txt',`Here is the result : ${first},${second}`);
//To append file
writeFileSync('./content/subcontent/result-sync.txt',
`Here is the result : ${first},${second}`,{flag:'a'});
console.log('done with this task');
console.log('starting the next one');