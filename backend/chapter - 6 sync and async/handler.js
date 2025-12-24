const fs = require('fs');

const handler = (req, res)=>{

  console.log(req.url, req.method);

  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      
      <!DOCTYPE html>
      <html lang = "en">

        <head>
          <title>Home</title>
        </head>

          <body>

            <h1>This is home page</h1>
            <a href = "/form-page">Go to form.</a>

          </body>


      </html>
      
    `);
    res.end();
    return;
  }
  else if(req.url === '/form-page'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      
      <!DOCTYPE html>
      <html lang = "en">

        <head>
          <title>Form</title>
        </head>

          <body>

            <form action = "/form-submit" method = "POST">

              <label for = "name">Name:</label>
              <input type = "text" placeholder = "Enter full name." name = "name" id = "name"/>
              <br/>
              <span>Gender:</span>
              <label for = "male">Male</label>
              <input type = "radio" name = "gender" value = "male" id = "male"/>

              <label for = "female">Female</label>
              <input type = "radio" name = "gender" value = "female" id = "female"/>


              <input type = "submit"/>

            </form>


          </body>


      </html>
      
    `);
    res.end()
    return;
  }
  else if(req.url === "/form-submit" && req.method === "POST"){
    const data = [];
    req.on('data', (chunk)=>{
      data.push(chunk);
    });
    
    req.on('end', ()=>{
      const chunkTostring = Buffer.concat(data).toString();

      const parsedString = new URLSearchParams(chunkTostring);

      const dataObj = Object.fromEntries(parsedString);

      console.log(dataObj);

      fs.writeFile('user.txt', JSON.stringify(dataObj), ()=>{
        console.log('Data written succesfully.');
        res.setHeader('Location', '/');
        res.statusCode = 302;
        res.end();
        return;
      });


    });
  }
  else{

    res.setHeader('Content-Type', 'text/html');
    res.write(`
      
      <!DOCTYPE html>
      <html lang = "en">

        <head>
          <title>404</title>
        </head>

          <body>

            <h1>Page not found</h1>
            <a href = "/">Go to home page.</a>

          </body>


      </html>
      
    `);
    res.end();

  };

};

module.exports = handler;