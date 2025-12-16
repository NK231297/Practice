const discCalc = (req, res)=>{
  res.setHeader('Content-Type', 'text/html');

  res.write(`
    
    <!DOCTYPE html>
    <html lang = "en">

      <head>
        <title>discCalc</title>
      </head>

      <body>

        <h1>Discount % calculator</h1>

        <h3>First: Please enter MRP.</h3>
        <h3>Second: Please enter Sale-price.</h3>

        <form action = "/disc-result" method = "POST">

          <input type = "number" name = "first" placeholder = "First"/ step = "0.01"> <span>₹</span>
          <br/>
          <input type = "number" name = "second" placeholder = "Second" step = "0.01"/><span>₹</span>
          <br/>
          <input type = "submit"/>
        
        </form>

        <a href = "/">home</a>
        
      </body>

    </html>
    
  `);

  res.end();
};

module.exports = discCalc;