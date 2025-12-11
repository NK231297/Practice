const func = (req, res)=>{
  const data = [];
  req.on('data', (chunk)=>{
    data.push(chunk);
  });

  req.on('end', ()=>{
    const chunkToText = Buffer.concat(data).toString();

    const param = new URLSearchParams(chunkToText);

    const parsedData = Object.fromEntries(param);

    console.log(parsedData);

    console.log(parsedData.first);
    console.log(parsedData.second);

    const resultData = +parsedData.first + +parsedData.second;

    res.setHeader('Content-Type', 'text/html');

    res.write(`
      <!DOCTYPE html>
      <html lang = "en">
        <head>
          <title> Result </title>
        </head>
        <body>
          <h1>Result is ${resultData}</h1>
          <a href = "/calculator">Back to calculator.</a>
        </body>
      </html>
    `);

    res.end();

  });

  
};

exports.resultExpo = func;