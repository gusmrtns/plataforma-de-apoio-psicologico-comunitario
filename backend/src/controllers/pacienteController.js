const Paciente = require('../models/pacienteModel');

const listarPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.listarPacientes();
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const buscarPacientePorId = async (req, res) => {
    try {
        const { id } = req.params;
        const paciente = await Paciente.buscarPacientePorId(Number(id));
        res.json(paciente);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const adicionarPaciente = async (req, res) => {
  try {
    const { 
      nomePac, cpfPac, rgPac, celularPac, nomeRespPac, generoPac, orienSexPac, 
      dataNascPac, escolaridadePac, estCivilPac, fotoPac, usuarioId 
    } = req.body;

    if (!nomePac || !cpfPac || !rgPac || !celularPac || !nomeRespPac || !generoPac || !orienSexPac || !dataNascPac || !escolaridadePac || !estCivilPac || !usuarioId) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const novoPaciente = await Paciente.adicionarPaciente({
      nomePac, cpfPac, rgPac, celularPac, nomeRespPac, generoPac, orienSexPac, 
      dataNascPac, escolaridadePac, estCivilPac, fotoPac, usuarioId
    });

    res.status(201).json(novoPaciente);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Erro ao criar paciente!' });
  }
};

const atualizarPaciente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nomePac, cpfPac, rgPac, celularPac, nomeRespPac, generoPac, orienSexPac, dataNascPac, escolaridadePac, estCivilPac, fotoPac } = req.body;

        const paciente = await Paciente.buscarPacientePorId(Number(id));

        if (paciente.usuarioId !== req.user.id) {
            return res.status(403).json({ error: 'Você não tem permissão para atualizar os dados deste profissional!' });
        }

        if (!nomePac || !cpfPac || !rgPac || !celularPac || !nomeRespPac || !generoPac || !orienSexPac || !dataNascPac || !escolaridadePac || !estCivilPac) {
            return res.status(400).json({ error: "Todos os campos obrigatórios devem ser preenchidos!" });
        }

        const pacienteAtualizado = await Paciente.atualizarPaciente(Number(id), req.user.id, { // Aqui passando req.user.id diretamente
            nomePac,
            cpfPac,
            rgPac,
            celularPac,
            nomeRespPac,
            generoPac,
            orienSexPac,
            dataNascPac: new Date(dataNascPac),
            escolaridadePac,
            estCivilPac,
            fotoPac,
        });

        res.json(pacienteAtualizado);
    } catch (error) {
        res.status(403).json({ error: error.message });
    }
};

const excluirPaciente = async (req, res) => {
    try {
      const { id } = req.params;
      const usuarioId = req.user.id;

      const paciente = await Paciente.buscarPacientePorId(Number(id));

      if (paciente.usuarioId !== usuarioId) {
          return res.status(403).json({ error: 'Você não tem permissão para excluir este paciente!' });
      }

      await Paciente.excluirPaciente(Number(id), usuarioId);
      res.status(204).send();
    } catch (error) {
      res.status(403).json({ error: error.message || "Erro ao excluir paciente!" });
    }
};

module.exports = {
  listarPacientes,
  buscarPacientePorId,
  adicionarPaciente,
  atualizarPaciente,
  excluirPaciente,
};
