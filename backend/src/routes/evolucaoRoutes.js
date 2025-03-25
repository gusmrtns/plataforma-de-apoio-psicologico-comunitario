const evolucaoController = require('../controllers/evolucaoController');
const express = require('express');

const router = express.Router();

router.get('/', evolucaoController.listarEvolucoes);
router.get('/:id', evolucaoController.buscarEvolucaoPorId);
router.post('/', evolucaoController.adicionarEvolucao);
router.put('/:id', evolucaoController.atualizarEvolucao);
router.delete('/:id', evolucaoController.excluirEvolucao);

module.exports = router;