const grupoApoioController = require('../controllers/grupoApoioController');
const express = require('express');

const router = express.Router();

router.get('/', grupoApoioController.listarGrupos);
router.get('/:id', grupoApoioController.buscarGrupoPorId);
router.post('/', grupoApoioController.adicionarGrupo);
router.put('/:id', grupoApoioController.atualizarGrupo);
router.delete('/:id', grupoApoioController.excluirGrupo);

module.exports = router;