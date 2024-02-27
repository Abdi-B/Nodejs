// Node core modules

// Stream

const os = require('os')
const fs = require('fs')
const http = require('http');
const url = require('url');
const querystring = require('querystring');

// console.log(`Platform ${os.platform()}, Name ${os.hostname()}`);
// console.log(os.cpus())
// console.log(os.cpus().length) // total number of cpu cores

const cpuInfo = os.cpus()

//FILE

// if(fs.existsSync('cpu.txt')) {
//     fs.readFile('cpu.txt', (err, data) => {
//         if(err) {
//             console.log(err);
//         }else{
//             console.log(data.toString()); // since the data is stored in buffer we have change it to String
//         }
//     })
// } else {
//     fs.writeFile('cpu.txt', JSON.stringify(cpuInfo), (err) => {
//         if(err) {
//             console.log(err)
//         }
//     })
// }


// async () => {
//     try {
//         const filename = 'cpu.txt';
//         if(fs.existsSync('filename')) {
//             const data = await fs.promises.readFile('filename');
//             console.log(data);
//         } else {
//             await fs.promises.writeFile('filename', JSON.stringify(cpuInfo))
//         }
        
//     } catch (error) {
//         console.log(error);
//     }
// };

// HTTP
// it contains == http (methods, version, header,request body, Cookies, URL)
http
    .createServer((req,res) => {
    //   console.log(req.url);

    //   console.log(url.parse(req.url));
    // check  http://localhost:3000/?name=abdi then check its search, query, path ...
      const path = url.parse(req.url);
    //   console.log(path)
      const query = querystring.parse(path.query);
    //   console.log(query)
    //   console.log(query['name']);
    if(path.pathname == '/'){
        res.writeHead(200, {'content-Type': 'text/plain'})
        res.write(`Hello ${query['name']}`);
    }
    else {
        res.writeHead(404, {'content-Type': 'text/plain'})

        res.write('Not found');
    }

    //   res.write('hello dear');
    res.end();
    })
    .listen(3001);
console.log("Server is listening on port 3002")



