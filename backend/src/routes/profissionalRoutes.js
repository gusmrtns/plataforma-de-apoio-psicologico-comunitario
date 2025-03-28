const profissionalController = require('../controllers/profissionalController');
const authMiddleware = require('../middleware/authMiddleware');
const express = require('express');

const router = express.Router();

router.get('/', profissionalController.listarProfissionais);
router.get('/:id', profissionalController.buscarProfissionalPorId);
router.post('/', profissionalController.adicionarProfissional);
router.put('/:id', authMiddleware, profissionalController.atualizarProfissional);
router.delete('/:id', authMiddleware, profissionalController.excluirProfissional);

module.exports = router;