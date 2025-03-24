const Usuario = require('../models/usuarioModel');

const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.listarUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Erro ao listar usuários!' });
  }
};

const buscarUsuarioPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.buscarUsuarioPorId(Number(id));
    res.json(usuario);
  } catch (error) {
    res.status(404).json({ error: error.message || 'Usuário não encontrado' });
  }
};

const adicionarUsuario = async (req, res) => {
  try {
    const { emailUsuar, senhaUsuar, tipoUsuar } = req.body;

    if (!emailUsuar || !senhaUsuar || !tipoUsuar) {
      return res.status(400).json({ error: 'Email, senha e tipo são obrigatórios' });
    }

    const novoUsuario = await Usuario.adicionarUsuario({
      emailUsuar,
      senhaUsuar,
      tipoUsuar,
    });

    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Erro ao criar usuário!' });
  }
};

const atualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { emailUsuar, senhaUsuar, tipoUsuar } = req.body;

    if (!emailUsuar || !senhaUsuar || !tipoUsuar) {
      return res.status(400).json({ error: 'Email, senha e tipo são obrigatórios' });
    }

    const usuarioAtualizado = await Usuario.atualizarUsuario(Number(id), {
      emailUsuar,
      senhaUsuar,
      tipoUsuar,
    });

    res.json(usuarioAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Erro ao atualizar o usuário' });
  }
};

const excluirUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    await Usuario.excluirUsuario(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message || 'Erro ao excluir usuário' });
  }
};

module.exports = {
  listarUsuarios,
  buscarUsuarioPorId,
  adicionarUsuario,
  atualizarUsuario,
  excluirUsuario,
};
