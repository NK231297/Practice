const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  
  if(req.url === '/mens'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
        <header>
          <title>Mintra - Mens</title>
          <style>
            .nav-ul{
              list-style: none;
              display: flex;
              justify-content: space-around;
            }
          </style>
        </header>
        <body>

          <head>
            <nav>
              <ul class="nav-ul">
                <a href="/"> <li>Home</li> </a>
                <a href="/mens"> <li>Mens</li> </a>
                <a href="/womens"> <li>Womens</li> </a>
                <a href="/childrens"> <li>Childrens</li> </a>
                <a href="/cart"> <li>Cart</li> </a>
              </ul>
            </nav>
          </head>

          <h1>This is mens section</h1>
        </body>
      </html>  
    `)
    res.end();
    return;
  }

  else if(req.url === '/womens'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
        <header>
          <title>Mintra - Womens</title>
          <style>
            .nav-ul{
              list-style: none;
              display: flex;
              justify-content: space-around;
            }
          </style>
        </header>
        <body>

          <head>
            <nav>
              <ul class="nav-ul">
                <a href="/"> <li>Home</li> </a>
                <a href="/mens"> <li>Mens</li> </a>
                <a href="/womens"> <li>Womens</li> </a>
                <a href="/childrens"> <li>Childrens</li> </a>
                <a href="/cart"> <li>Cart</li> </a>
              </ul>
            </nav>
          </head>

          <h1>This is womens section</h1>
        </body>
      </html>
    `)
    res.end();
    return;
  }

  else if(req.url === '/childrens'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
        <header>
          <title>Mintra - Childrens</title>
          <style>
            .nav-ul{
              list-style: none;
              display: flex;
              justify-content: space-around;
            }
          </style>
        </header>
        <body>

          <head>
            <nav>
              <ul class="nav-ul">
                <a href="/"> <li>Home</li> </a>
                <a href="/mens"> <li>Mens</li> </a>
                <a href="/womens"> <li>Womens</li> </a>
                <a href="/childrens"> <li>Childrens</li> </a>
                <a href="/cart"> <li>Cart</li> </a>
              </ul>
            </nav>
          </head>

          <h1>This is childrens section</h1>
        </body>
      </html>
    `)
    res.end();
    return;
  }

  else if(req.url === '/cart'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
        <header>
          <title>Mintra - Cart</title>
          <style>
            .nav-ul{
              list-style: none;
              display: flex;
              justify-content: space-around;
            }
          </style>
        </header>
        <body>
          <head>
            <nav>
              <ul class="nav-ul">
                <a href="/"> <li>Home</li> </a>
                <a href="/mens"> <li>Mens</li> </a>
                <a href="/womens"> <li>Womens</li> </a>
                <a href="/childrens"> <li>Childrens</li> </a>
                <a href="/cart"> <li>Cart</li> </a>
              </ul>
            </nav>
          </head>
          <h1>This is your cart</h1>
        </body>
      </html>
    `)
    res.end();
    return;
  }
  
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
      <header>
        <title>Mintra</title>
        <style>
            .nav-ul{
              list-style: none;
              display: flex;
              justify-content: space-around;
            }
        </style>
      </header>
      <body>
        <head>
          <nav>
            <ul class="nav-ul">
              <a href="/"> <li>Home</li> </a>
              <a href="/mens"> <li>Mens</li> </a>
              <a href="/womens"> <li>Womens</li> </a>
              <a href="/childrens"> <li>Childrens</li> </a>
              <a href="/cart"> <li>Cart</li> </a>
            </ul>
          </nav>
        </head>
        <h1>This is home.</h1>
      </body>
    </html>  
  `);
  res.end();
});

server.listen(3001, ()=>{
  console.log('Server running on address: http://localhost:3001');
})