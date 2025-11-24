const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req);
    process.exit();
});

const port = 3001;

server.listen(port, ()=>{
    console.log(`Server runniing on Address http://localhost:${port}`);
});