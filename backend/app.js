const http = require('http');

const server = http.createServer((req, res)=>{
    // console.log(req);
    // console.log(req.url, req.method ,req.headers);

    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`
                <!DOCTYPE html>
                <html lan="en">
                    <header>
                        <title> Home </title>
                    </header>
                    <body>
                    <h1> Enter your details </h1>
                        <form action="/submit-details" method="POST">
                            <h3>Enter your Name</h3>
                            <input type="text" name="name" id="name" placeholder="Enter your name">
                            </br>
                            </br>
                            <h3>Enter your gender</h3>
                            <label for="male">Male</label>
                            <input type="radio" id="male" name="male" value="male"/>

                            <label for="female">Female</label>
                            <input type="radio" id="female" name="female" value="female"/>
                            </br>
                            </br>
                            <input type="submit">
                        </form>

                    </body>
                </html>
            `)
        res.end();
        return;
    } else if(req.url === '/products'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`
                <!DOCTYPE html>
                <html lan="en">
                    <header>
                        <title> Products </title>
                    </header>
                    <body>
                        <h1> Checkout our products </h1>
                    </body>
                </html>
            `)
        res.end();
        return;
    }
    res.setHeader('Content-Type', 'text/html');
    res.write(`
            <!DOCTYPE html>
            <html lan="en">
                <header>
                    <title> Others </title>
                </header>
                <body>
                    <h1> LIKE / SHARE / SUBSCRIBE </h1>
                </body>
            </html>
        `)

});

const PORT = 3001;

server.listen(PORT, ()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
});