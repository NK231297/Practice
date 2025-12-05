const requestHandler = (req, res)=>{
  console.log(req.url, req.method);

  if(req.url === "/"){
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
    `)

    res.end();

    return;
  }

  else if(req.url === '/calculator'){
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
    return;
  }

  else if(req.url === '/result'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html lang = "en">

        <head>
          <title> Result </title>
        </head>

        <body>



        </body>

      </html>  
    `)
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
};

// module.exports = requestHandler;

exports.requestHandler = requestHandler;