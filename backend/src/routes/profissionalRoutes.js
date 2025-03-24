const profissionalController = require('../controllers/profissionalController');
const express = require('express');

const router = express.Router();

router.get('/', profissionalController.listarProfissionais);
router.get('/:id', profissionalController.buscarProfissionalPorId);
router.post('/', profissionalController.adicionarProfissional);
router.put('/:id', profissionalController.atualizarProfissional);
router.delete('/:id', profissionalController.excluirProfissional);

module.exports = router;