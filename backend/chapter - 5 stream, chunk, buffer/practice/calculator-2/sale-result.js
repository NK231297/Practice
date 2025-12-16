const saleResult = (req, res)=>{
  const data = [];

  req.on('data', (chunk)=>{
    data.push(chunk);
  });

  req.on('end', ()=>{
    const chunkToText = Buffer.concat(data).toString();

    const parsedText = new URLSearchParams(chunkToText);

    const dataObj = Object.fromEntries(parsedText);

    const firstPaisa = (dataObj.first) * 100;
    const secondPerc = dataObj.second;

    const result = ((firstPaisa - secondPerc/100 * firstPaisa) / 100).toFixed(2);

    // const result = resultPaisa.toFixed(2);

    console.log(secondPerc);

    res.setHeader('Content-Type', 'text/html');

    res.write(`
      
      <!DOCTYPE html>
      <html lang = "en">
        <head>
          <title>Result</title>
        </head>

        <body>

          <h1>First value: ${firstPaisa / 100}Rs</h1>
          <h1>Second value:  ${secondPerc}%</h1>
          <h1>Result: ${result}</h1>
          </br>
          <a href = "/sale-calc">Back to sale price calc.</a>

        </body>

      </html>
      
    `);

    res.end();


  });
};

module.exports = saleResult;