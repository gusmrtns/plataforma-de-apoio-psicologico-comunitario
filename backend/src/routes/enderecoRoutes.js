const enderecoController = require('../controllers/enderecoController');
const express = require('express');

const router = express.Router();

router.get('/', enderecoController.listarEnderecos);
router.get('/:id', enderecoController.buscarEnderecoPorId);
router.post('/', enderecoController.adicionarEndereco);
router.put('/:id', enderecoController.atualizarEndereco);
router.delete('/:id', enderecoController.excluirEndereco);

module.exports = router;
