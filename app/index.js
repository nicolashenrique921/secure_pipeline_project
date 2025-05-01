const express = require('express');
const escape = require('escape-html');
const helmet = require('helmet');

const app = express();
const port = 3000;

// Middleware de segurança para headers HTTP
app.use(helmet());

app.get('/hello', (req, res) => {
  // Escapando a entrada do usuário para evitar XSS
  const name = escape(req.query.name || 'visitante');
  res.send(`Olá ${name}`);
});

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
