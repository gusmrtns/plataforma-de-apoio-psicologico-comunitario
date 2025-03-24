const Atendimento = require('../models/atendimentoModel');

const listarAtendimentos = async (req, res) => {
    try {
        const atendimentos = await Atendimento.listarAtendimentos();
        res.json(atendimentos);
    } catch (error) {
        res.status(500).json({error : error.message || "Erro ao listar atendimentos!"});
    }
};

const buscarAtendimentoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const atendimento = await Atendimento.buscarAtendimentoPorId(Number(id));
        res.json(atendimento); 
    } catch (error) {
        res.status(404).json({error: error.message || 'Atendimento não encontrado'});
    }
};

const adicionarAtendimento = async (req, res) => {
    try {
        const { dataHoraAtend, statusAtend, avaliacaoAtend, pacienteId, profissionalId } = req.body
        
        if (!dataHoraAtend || !statusAtend || !pacienteId || !profissionalId) {
            return res.status(400).json({error: 'Data e hora, Status, pacienteId e profissionalId são obrigatórios'})
        }

        const novoAtendimento = await Atendimento.adicionarAtendimento({
            dataHoraAtend,
            statusAtend,
            avaliacaoAtend,
            pacienteId,
            profissionalId,
        });

        res.status(201).json(novoAtendimento);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Erro ao criar atendimento!'});
    }
};

const atualizarAtendimento = async (req, res) => {
    try {
        const { id } = req.params;
        const { dataHoraAtend, statusAtend, avaliacaoAtend, pacienteId, profissionalId } = req.body

        if (!dataHoraAtend || !statusAtend || !pacienteId || !profissionalId) {
            return res.status(400).json({ error: 'Data e hora, Status, pacienteId e profissionalId são obrigatórios' })
        }

        const atendimentoAtualizado = await Atendimento.atualizarAtendimento(Number(id), {
            dataHoraAtend,
            statusAtend,
            avaliacaoAtend,
            pacienteId,
            profissionalId,
        });

        res.json(atendimentoAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Erro ao atualizar o atendimento'});
    }
};

const excluirAtendimento = async (req, res) => {
    try {
        const {id} = req.params;
        await Atendimento.excluirAtendimento(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message || 'Erro ao excluir atendimento'});
    }
};

module.exports = {
    listarAtendimentos,
    buscarAtendimentoPorId,
    adicionarAtendimento,
    atualizarAtendimento,
    excluirAtendimento,
}
