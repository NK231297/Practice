const calculator = (req, res)=>{
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    
    <!DOCTYPE html>
    <html lang = "en">
      <head>
        <title>Home</title>
      </head>

      <body>

        <div>
          <h4>Calculator home page</h4>
          <h6>Select your calculator</h6>

          <ul>
            <a href = "/simple-cal"> <li>Simple Calulator</li> </a>
            <a href = "/disc-cal"> <li>Discount percent Calulator</li> </a>
            <a href = "salePr-cal"> <li>Sale price Calulator</li> </a>
          </ul>
        </div>

      </body>
    </html>

  `);
  res.end();
};


exports.calculator = calculator;