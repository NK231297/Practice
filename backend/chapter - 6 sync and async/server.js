const handler = require('./handler');

const http = require('http');

const server = http.createServer(handler);

const PORT = 3001;

server.listen(PORT, ()=>{
  console.log(`Server running on http://localhost:${PORT}`);
});