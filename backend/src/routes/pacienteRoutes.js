const pacienteController = require('../controllers/pacienteController');
const express = require('express');

const router = express.Router();

// Rota para listar todos os pacientes
router.get('/', pacienteController.listarPacientes);

// Rota para buscar um paciente pelo ID
router.get('/:id', pacienteController.buscarPacientePorId);

// Rota para criar um novo paciente
router.post('/', pacienteController.adicionarPaciente);

// Rota para atualizar um paciente existente
router.put('/:id', pacienteController.atualizarPaciente);

// Rota para excluir um paciente
router.delete('/:id', pacienteController.excluirPaciente);

module.exports = router;
