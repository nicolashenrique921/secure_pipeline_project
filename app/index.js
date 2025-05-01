const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  const name = req.query.name;
  res.send(`Olá ${name}`); // vulnerável a XSS
});

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});