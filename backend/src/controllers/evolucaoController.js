const Evolucao = require('../models/evolucaoModel');

const listarEvolucoes = async (req, res) => {
    try {
        const evolucoes = await Evolucao.listarEvolucoes();
        res.json(evolucoes);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao listar Evoluções Clínicas"});
    }
};

const buscarEvolucaoPorId = async (req, res) => {
    try {
        const {id} = req.params;
        const evolucao = await Evolucao.buscarEvolucaoPorId(Number(id));
        res.json(evolucao);
    } catch (error) {
        res.status(400).json({ error: error.message || "Evolução Clínica não encontrada!"});
    }
};

const adicionarEvolucao = async (req, res) => {
    try {
        const { relatorioEvolClin, ajusteTratamentoEvolClin, histFamiEvolClin, problEvolClin, medicEvolClin, qualSonoEvolClin, apetiteEvolClin, pensNegEvolClin, pacienteId, profissionalId, atendimentoId } = req.body;

        if (!relatorioEvolClin || !histFamiEvolClin || !problEvolClin || !medicEvolClin || !pacienteId || !profissionalId ) {
            return res.status(400).json({ error: 'Os campos relatório, histórico familiar, problemas, medicação e id de paciente e profissional são obrigatórios'});
        }

        const novoEvolucao = await Evolucao.adicionarEvolucao({
            relatorioEvolClin,
            ajusteTratamentoEvolClin,
            histFamiEvolClin,
            problEvolClin,
            medicEvolClin,
            qualSonoEvolClin,
            apetiteEvolClin,
            pensNegEvolClin,
            pacienteId,
            profissionalId,
            atendimentoId,
        });

        res.status(201).json(novoEvolucao);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao criar Evolução Clínica"});
    }
};

const atualizarEvolucao = async (req, res) => {
    try {
        const { id } = req.params;
        const { relatorioEvolClin, ajusteTratamentoEvolClin, histFamiEvolClin, problEvolClin, medicEvolClin, qualSonoEvolClin, apetiteEvolClin, pensNegEvolClin, pacienteId, profissionalId, atendimentoId } = req.body;

        if (!relatorioEvolClin || !histFamiEvolClin || !problEvolClin || !medicEvolClin || !pacienteId || !profissionalId ) {
            return res.status(400).json({ error: 'Os campos relatório, histórico familiar, problemas, medicação e id de paciente e profissional são obrigatórios'});
        }

        const evolucaoAtualizada = await Evolucao.atualizarEvolucao(Number(id), {
            relatorioEvolClin,
            ajusteTratamentoEvolClin,
            histFamiEvolClin,
            problEvolClin,
            medicEvolClin,
            qualSonoEvolClin,
            apetiteEvolClin,
            pensNegEvolClin,
            pacienteId,
            profissionalId,
            atendimentoId,
        });   

        res.json(evolucaoAtualizada);
    } catch (error) {
        res.status(500).json({error: error.message || "Erro ao atualizar Evolução Clínica"});
    }
};

const excluirEvolucao = async (req, res) => {
    try {
        const { id } = req.params;
        await Evolucao.excluirEvolucao(Number(id));
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao excluir Evolução Clínica!"});
    }
};

module.exports = {
    listarEvolucoes,
    buscarEvolucaoPorId,
    adicionarEvolucao,
    atualizarEvolucao,
    excluirEvolucao,
}