const saleResult = (req, res)=>{
  const data = [];

  req.on('data', (chunk)=>{
    data.push(chunk);
  });

  req.on('end', ()=>{
    const chunkToText = data.concat().toString();

    const parsedText = new URLSearchParams(chunkToText);

    const dataObj = Object.fromEntries(parsedText);

    const firstPaisa = (dataObj.first) * 100;
    const secondPerc = dataObj.second;

    const result = firstPaisa - secondPerc/100 * firstPaisa;

    console.log(secondPerc);

    res.setHeader('Content-Type', 'text/html');

    res.write(`
      
      <!DOCTYPE html>
      <html lang = "en">
        <head>
          <title>404</title>
        </head>

        <body>

          <h1>First value: ${}</h1>
          <h1>${secondPerc}</h1>
          <h1>${secondPerc}</h1>

        </body>

      </html>
      
    `);

    res.end();


  });
};

module.exports = saleResult;