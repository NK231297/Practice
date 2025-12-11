const calculator = require('./calculator');

const http = require('http');

const server = http.createServer(calculator);

const PORT = 3002;

server.listen(PORT, ()=>{
  console.log(`Server running on URL: http//localhost:${PORT}`);
});