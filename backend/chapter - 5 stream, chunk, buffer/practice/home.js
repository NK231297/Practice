const home = (req, res)=>{
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <!DOCTYPE html>
    <html lang = "en">

      <head>
        <title>Home</title>
      </head>

      <body>

        <h1>This is Welcome page.</h1>

        <a href = "/calculator"> Calculator Link </a>

      </body>

    </html>  
  `);

  res.end();
};

exports.home = home;