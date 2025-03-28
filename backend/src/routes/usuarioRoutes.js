const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middleware/authMiddleware');
const express = require('express');

const router = express.Router();

// Rota desativada pois só seria para uso por parte de administradores
// router.get('/', authMiddleware, usuarioController.listarUsuarios);

router.get('/:id', authMiddleware, usuarioController.buscarUsuarioAutenticado);
router.put('/:id', authMiddleware, usuarioController.atualizarUsuario);
router.delete('/:id', authMiddleware, usuarioController.excluirUsuario);

module.exports = router;