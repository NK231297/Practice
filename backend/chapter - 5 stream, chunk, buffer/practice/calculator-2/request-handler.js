const home = require('./home');
const discCalc = require('./disc-calc');
const saleCalc = require('./sale-calc');
const discResult = require('./disc-result');
const saleResult = require('./sale-result');

const requestHandler = (req, res)=>{

  console.log(req.url, req.method);

  if(req.url === '/'){
    home(req, res);
    return;
  }

  else if(req.url === '/disc-calc'){
    discCalc(req, res);
    return;
  
  }

  else if(req.url === '/sale-calc'){
    saleCalc(req, res);
    return;
  }

  else if(req.url === '/disc-result' && req.method === 'POST'){
    discResult(req, res);
    return;
  }
  else if(req.url === '/sale-result' && req.method === 'POST'){
    saleResult(req, res);
    return;
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(`
    
    <!DOCTYPE html>
    <html lang = "en">
      <head>
        <title>404</title>
      </head>

      <body>

        <h1>Page not found.</h1>

        <a href = "/">Go to home page.</a>

      </body>

    </html>
    
  `);

  res.end();

};

exports.requestHandler = requestHandler;