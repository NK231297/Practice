const {resultExpo} = require('./result');
const {home} = require('./home');
const {sumCalculator} = require('./sum-calculator');

const requestHandler = (req, res)=>{
  console.log(req.url, req.method);

  if(req.url === "/"){
    home(req, res);
    return;
  }

  else if(req.url.toLowerCase() === '/calculator'){
    sumCalculator(req, res);
    return;
  }

  else if(req.url.toLowerCase() === '/result' && req.method === 'POST'){
    resultExpo(req, res);
    return;
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <!DOCTYPE html>
    <html lang = "en">
    <head>
      <title>Not found</title>
    </head>

    <body>

      <h1>404 page not found.</h1>
      <a href = "/"> Return home. </a>

    </body>

    </html>  
  `);
  res.end();

};

exports.requestHandler = requestHandler;