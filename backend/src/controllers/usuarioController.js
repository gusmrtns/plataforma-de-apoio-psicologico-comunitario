const Usuario = require('../models/usuarioModel');
const bcrypt = require("bcryptjs");

const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.listarUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Erro ao listar usuários!' });
  }
};

const buscarUsuarioAutenticado = async (req, res) => {
    try {
      const userId = req.user.userId; 
      const usuario = await Usuario.buscarUsuarioPorId(Number(userId));
  
      if (!usuario) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
  
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message || "Erro ao buscar usuário autenticado!" });
    }
  };

const atualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.userId; 

        if (userId !== Number(id)) {
            return res.status(403).json({ error: 'Você só pode editar sua própria conta' });
        }

        const { emailUsuar, senhaUsuar, tipoUsuar } = req.body;

        if (!emailUsuar || !senhaUsuar || !tipoUsuar) {
            return res.status(400).json({ error: 'Email, senha e tipo são obrigatórios' });
        }

        const senhaCriptografada = await bcrypt.hash(senhaUsuar, 10);

        const usuarioAtualizado = await Usuario.atualizarUsuario(Number(id), {
            emailUsuar,
            senhaUsuar: senhaCriptografada,
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
        const userId = req.user.userId; 

        if (userId !== Number(id)) {
            return res.status(403).json({ error: 'Você só pode excluir sua própria conta' });
        }

        await Usuario.excluirUsuario(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message || 'Erro ao excluir usuário' });
    }
};

module.exports = {
    listarUsuarios,
    buscarUsuarioAutenticado,
    atualizarUsuario,
    excluirUsuario,
};
