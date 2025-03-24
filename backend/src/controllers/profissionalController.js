const Profissional = require('../models/profissionalModel');

const listarProfissionais = async (req, res) => {
    try {
        const profissionais = await Profissional.listarProfissionais();
        res.json(profissionais)
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao listar profissionais"});
    }
};

const buscarProfissionalPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const profissional = await Profissional.buscarProfissionalPorId(Number(id));
        res.json(profissional);
    } catch (error) {
        res.status(400).json({ error: error.message || "Profissional não encontrado!"});
    }
};

const adicionarProfissional = async (req, res) => {
    try {
        const { nomeProf, cpfProf, rgProf, celularProf, abordagemProf, formacaoProf, matriculaProf, localizacaoProf, usuarioId } = req.body;

        if (!nomeProf || !cpfProf || !rgProf || !celularProf || !abordagemProf || !formacaoProf || !matriculaProf || !localizacaoProf ||  !usuarioId) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios'})
        }

        const novoProfissional = await Profissional.adicionarProfissional({
            nomeProf,
            cpfProf,
            rgProf,
            celularProf,
            abordagemProf,
            formacaoProf,
            matriculaProf,
            localizacaoProf,
            usuarioId,
        });

        res.status(201).json(novoProfissional)
    } catch (error) {
        res.status(500).json({ error: error.message || 'Erro ao criar profissional'});
    }
};

const atualizarProfissional = async (req, res) => {
    try {
        const { id } = req.params;
        const { nomeProf, cpfProf, rgProf, celularProf, abordagemProf, formacaoProf, matriculaProf, localizacaoProf, usuarioId } = req.body;

        if (!nomeProf || !cpfProf || !rgProf || !celularProf || !abordagemProf || !formacaoProf || !matriculaProf || !localizacaoProf ||  !usuarioId) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios'})
        }

        const profissionalAtualizado = await Profissional.atualizarProfissional(Number(id), {
            nomeProf,
            cpfProf,
            rgProf,
            celularProf,
            abordagemProf,
            formacaoProf,
            matriculaProf,
            localizacaoProf,
            usuarioId,
        });

        res.json(profissionalAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Erro ao atualizar profissional'});
    }
};

const excluirProfissional = async (req, res) => {
    try {
        const { id } = req.params;
        await Profissional.excluirProfissional(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao excluir profissional!"});
    }
};

module.exports = {
    listarProfissionais,
    buscarProfissionalPorId,
    adicionarProfissional,
    atualizarProfissional,
    excluirProfissional,
}