const simpleCalc = (req, res)=>{
  if(req.url.toLowercase() === '/simple-cal'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    
      <!DOCTYPE html>
      <html lang = "en">
        <head>
          <title>Home</title>
        </head>

        <body>

          <form action = '/simple-cal/result' method = "POST">

            <label></label>

          </form>

        </body>
      </html>

    `);
  }
};