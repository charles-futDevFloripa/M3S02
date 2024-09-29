const http = require('http');

// Função que será chamada para tratar requisições
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

// Define a porta que o servidor vai escutar
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
