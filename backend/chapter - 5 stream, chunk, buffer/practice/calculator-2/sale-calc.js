const saleCalc = (req, res)=>{
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    
    <!DOCTYPE html>
    <html lang = "en">
    <head>
    <title>saleCalc</title>
    </head>
    
    <body>
      <h1>Sale price calculator.</h1>

      <h3>First: Please enter MRP.</h3>
      <h3>Second: Please enter Discount in %.</h3>

      <form action = "/sale-result" method = "POST">

        <input type = "number" name = "first" placeholder = "First"/>
        <br/>
        <input type = "number" name = "second" placeholder = "Second" step = "0.01"/>
        <br/>
        <input type = "submit"/>
        

      </form>

    </body>
    </html>  
    
  `);
  res.end();
};

module.exports = saleCalc;