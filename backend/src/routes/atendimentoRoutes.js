const atendimentoController = require('../controllers/atendimentoController');
const authMiddleware = require("../middleware/authMiddleware");
const express = require('express');

const router = express.Router();

router.get('/', authMiddleware, atendimentoController.listarAtendimentos);
router.get('/:id', authMiddleware, atendimentoController.buscarAtendimentoPorId);
router.post('/', authMiddleware, atendimentoController.adicionarAtendimento);
router.put('/:id', authMiddleware, atendimentoController.atualizarAtendimento);
router.delete('/:id', authMiddleware, atendimentoController.excluirAtendimento);

module.exports = router;