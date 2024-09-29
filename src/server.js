const http = require('http');
require('dotenv').config();

const PORT = process.env.PORT_API || 3000;

const server = http.createServer((req, res) => {
  // Verifica se a rota é /fundamentos e o método é GET
  if (req.url === '/fundamentos' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world, fundamentos nodejs aplicado.');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
