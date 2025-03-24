const usuarioController = require('../controllers/usuarioController');
const express = require('express');

const router = express.Router();

// Rota para listar todos os usuários
router.get('/', usuarioController.listarUsuarios);

// Rota para buscar um usuário pelo ID
router.get('/:id', usuarioController.buscarUsuarioPorId);

// Rota para criar um novo usuário
router.post('/', usuarioController.adicionarUsuario);

// Rota para atualizar um usuário existente
router.put('/:id', usuarioController.atualizarUsuario);

// Rota para excluir um usuário
router.delete('/:id', usuarioController.excluirUsuario);

module.exports = router;
