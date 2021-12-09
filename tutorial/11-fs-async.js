const {readFile, writeFile} = require('fs');
console.log('start');
readFile('./content/subcontent/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const result1 = result;
    readFile('./content/subcontent/second.txt','utf8',(err, result)=>{
        if(err){
            console.log(err);
            return
        }
        const result2 = result;
        writeFile('./content/subcontent/result-async.txt',
        `Here is the result: ${result1}, ${result2}`,(err,result)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log('done with this task');
        })
    })
});
console.log('starting next task');