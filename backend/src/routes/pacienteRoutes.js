const pacienteController = require('../controllers/pacienteController');
const authMiddleware = require('../middleware/authMiddleware');
const express = require('express');

const router = express.Router();

router.get('/', pacienteController.listarPacientes);
router.get('/:id', pacienteController.buscarPacientePorId);
router.post('/', pacienteController.adicionarPaciente);
router.put('/:id', authMiddleware, pacienteController.atualizarPaciente);
router.delete('/:id', authMiddleware, pacienteController.excluirPaciente);

module.exports = router;
