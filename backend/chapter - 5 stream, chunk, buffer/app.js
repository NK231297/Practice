const http = require('http');

const fs = require('fs');
const { prototype } = require('events');
const { fileURLToPathBuffer } = require('url');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);

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
                    <form action = "/submit-details" method = "POST">
                        <h3>Enter your Name</h3>
                        <input type="text" name="name" id="name" placeholder="Enter your name">
                        </br>
                        </br>
                        <h3>Enter your gender</h3>
                        <label for="male">Male</label>
                        <input type="radio" id="male" name="gender" value="male"/>

                        <label for="female">Female</label>
                        <input type="radio" id="female" name="gender" value="female"/>
                        </br>
                        </br>
                        <input type="submit">
                    </form>

                </body>
            </html>
        `)
        res.end();
        return;
    }

    else if(req.url === '/submit-details' && req.method === 'POST'){

        const data = [];

        req.on('data', (chunk)=>{
            console.log(chunk);
            data.push(chunk);
        });

        req.on('end', ()=>{
            const fullData = Buffer.concat(data).toString();
            console.log(fullData);
        });

        fs.writeFileSync('user.txt', 'Nikhil Kumar');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
        return;
    }

    else if(req.url.toLowerCase() === '/products'){
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
    res.end();
});

const PORT = 3001;

server.listen(PORT, ()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
})