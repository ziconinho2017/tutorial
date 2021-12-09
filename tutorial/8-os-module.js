const os = require('os');
//info about current user
const user = os.userInfo();
console.log(user);

//method retrns the systeme uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`);
const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem()/(1024*8),
    freeMem : os.freemem()/(1024*8)
}
console.log(currentOs);