const home = (req, res)=>{
    res.setHeader('Content-Type', 'text/html');

    res.write(`
      
      <!DOCTYPE html>
      <html lang = "en">
        <head>
          <title>Home</title>
        </head>

        <body>

          <h1>This is home page.</h1>

          <a href = "/disc-calc">Go to Discount-calculator.</a>
          <br/>
          <a href = "/sale-calc">Go to Sale-calculator.</a>

        </body>

      </html>  
      
    `);

    res.end();
};

// exports.home = home;
module.exports = home;