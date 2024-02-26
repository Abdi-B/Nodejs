// console.log(process.env)
// console.log(process.argv)

const startTime = process.hrtime();
for (let index = 0; index < 1000; index++) {}
const endTime = process.hrtime(startTime)
// console.log('time it took', endTime) // seconds and nano seconds

// console.log(_filename, __dirname)

// MODULE
// console.log(module)

console.log(require.resolve('./file')) // absolute path of the file