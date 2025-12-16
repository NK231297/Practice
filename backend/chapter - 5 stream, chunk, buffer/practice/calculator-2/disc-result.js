const discResult = (req, res)=>{
  const data = [];

  req.on('data', (chunk)=>{
    data.push(chunk);
  });

  req.on('end', ()=>{

    const chunkToText = Buffer.concat(data).toString();

    const parsedText = new URLSearchParams(chunkToText);

    const dataObj = Object.fromEntries(parsedText);

    const firstPaisa = (dataObj.first) * 100;
    const secondPaisa = (dataObj.second) * 100;

    const result = ((firstPaisa - secondPaisa)/firstPaisa * 100).toFixed(2);

    res.setHeader('Content-Type', 'text/html');
    res.write(`
      
      <!DOCTYPE html>
      <html lang = "en">
        <head>
          <title>discResult</title>
        </head>

        <body>

          <h1>First value: ${firstPaisa / 100}</h1>
          <h1>Second value: ${secondPaisa / 100}</h1>
          <h1>Discount: ${result}%</h1>

          

          <a href = "/disc-calc">Back to dicount calc.</a>

        </body>

      </html>
      
    `);
    res.end();
    
  });
};

module.exports = discResult;