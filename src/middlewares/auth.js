require('dotenv').config();
const { verify } = require('jsonwebtoken');

function garantirAutenticao(permitirApenas) {
  return (request, response, next) => {
    const { authorization } = request.headers;
    if (!authorization)
      return response.status(401).json({ message: 'Token não encontrado!' });

    const [, token] = authorization.split(' ');
    try {
      const decoded = verify(token, process.env.JWT_SECRET); // Verifica usando a chave do .env
      const { sub, permissao } = decoded;

      if (permitirApenas !== permissao) {
        return response
          .status(403)
          .json({ message: 'Acesso negado: permissão insuficiente!' });
      }

      request.user = { id: sub, permissao };
      next();
    } catch (error) {
      return response.status(401).json({ message: 'Token inválido!' });
    }
  };
}

module.exports = { garantirAutenticao };
