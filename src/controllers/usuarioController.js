const Usuario = require('../../database/models/usuarios');
const usuarioSchema = require('../validations/usuarioValidation');
const bcrypt = require('bcrypt');

const cadastrarUsuario = async (req, res) => {
  try {
    // Validação dos dados
    await usuarioSchema.validate(req.body, { abortEarly: false });

    const { nome, sobrenome, email, senha, permissao } = req.body;

    // Verificar se o email já existe
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'Email já cadastrado' });
    }

    // Criptografar a senha
    const senhaHash = await bcrypt.hash(senha, 10);

    // Criar o usuário
    const novoUsuario = await Usuario.create({
      nome,
      sobrenome,
      email,
      senha: senhaHash,
      permissao,
    });

    return res
      .status(201)
      .json({ message: 'Usuário criado com sucesso', usuario: novoUsuario });
  } catch (error) {
    if (error.name === 'ValidationError') {
      // Erros de validação do Yup
      const erros = error.inner.map((err) => err.message);
      return res.status(400).json({ errors: erros });
    }
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

module.exports = { cadastrarUsuario };
