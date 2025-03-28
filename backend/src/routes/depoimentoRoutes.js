const depoimentoController = require('../controllers/depoimentoContoller');
const express = require('express');

const router = express.Router();

router.get('/', depoimentoController.listarDepoimentos);
router.get('/:id', depoimentoController.buscarDepoimentoPorId);
router.post('/', depoimentoController.adicionarDepoimento);
// Rota desativada pois só seria permitido seu uso por administradores
// router.put('/:id', depoimentoController.atualizarDepoimento);
// Rota desativada pois só seria permitido seu uso por administradores
// router.delete('/:id', depoimentoController.excluirDepoimento);

module.exports = router;