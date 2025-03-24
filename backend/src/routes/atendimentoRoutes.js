const atendimentoController = require('../controllers/atendimentoController');
const express = require('express');

const router = express.Router();

router.get('/', atendimentoController.listarAtendimentos);
router.get('/:id', atendimentoController.buscarAtendimentoPorId);
router.post('/', atendimentoController.adicionarAtendimento);
router.put('/:id', atendimentoController.atualizarAtendimento);
router.delete('/:id', atendimentoController.excluirAtendimento);

module.exports = router;