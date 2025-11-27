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
                        <h3>Enter your Name</h3>
                        </br>
                        <input type="text" name="" id="" placeholder="Enter your name">
                        </br>
                        </br>
                        <h3>Enter your gender</h3>
                        </br>
                        <input type="text" id="" name="">
                        </br>
                        </br>
                        <button> Submit </button>
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

/*
res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <header>
                <title> Home </title>
            </header>
            <body>
                <h1>Enter your details</h1>
                <form>
                    <h3>Name:</h3>
                    </br>
                    <input type="text" placeholder="Enter your name">
                    </br>
                    </br>
                    <h3>Gender:</h3>
                    </br>
                    <input type="text" placeholder="Enter your gender">
                </form>
            </body>
            </html>
        `)
        */

//hello3