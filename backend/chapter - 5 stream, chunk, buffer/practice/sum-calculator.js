const sumCalculator = (req, res)=>{
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <!DOCTYPE html>
    <html lang = "en">
      <head>
        <title> Calculator </title>
      </head>

      <body>

        <h2>Input here: </h2>

        <form action = "/result" method = "POST">
          <input type = "number" name = "first" /> 
          <span> + </span>
          <input type = "number" name = "second" />
          <input type = "submit" /> 
        </form>

      </body>
    </html>
  `);

  res.end();
};

exports.sumCalculator = sumCalculator;