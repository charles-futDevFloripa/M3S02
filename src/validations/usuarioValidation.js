const yup = require('yup');

const usuarioSchema = yup.object().shape({
  nome: yup.string().required('O nome é obrigatório'),
  sobrenome: yup.string(),
  email: yup.string().email('Email inválido').required('O email é obrigatório'),
  senha: yup.string().required('A senha é obrigatória'),
  permissao: yup
    .string()
    .oneOf(['criador', 'estudante'], 'Permissão inválida')
    .required('A permissão é obrigatória'),
});

module.exports = usuarioSchema;
