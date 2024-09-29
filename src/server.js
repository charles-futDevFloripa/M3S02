const express = require('express');
const app = express();
require('dotenv').config();

// Middlewares
app.use(express.json());

// Rotas
const usuarioRoutes = require('./routes/usuarioRoutes');
app.use('/api', usuarioRoutes);

//Exercicio 01
app.get('/fundamentos', (req, res) => {
  res.send('Hello world, fundamentos nodejs aplicado.');
});

// Porta
const PORT = process.env.PORT_API || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
