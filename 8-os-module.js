const os = require('os')

//info about current user
const user = os.userInfo();

console.log(user);

//method returns the system uptime in seconds
console.log(`the system Uptime is ${os.uptime()} seconds`)
const current05 = {
  name:os.type(),
  release: os.release(),
  totalMem: os.totalMem(),
  freeMem: os.freeMem()
}

console.log(current05)