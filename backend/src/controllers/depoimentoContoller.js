const Depoimento = require('../models/depoimentoModel');

const listarDepoimentos = async (req, res) => {
    try {
        const depoimentos = await Depoimento.listarDepoimentos();
        res.json(depoimentos);
    } catch (error) {
        res.status(500).json({error: error.message || "Erro ao listar depoimentos!" });
    }
};

const buscarDepoimentoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const depoimento = await Depoimento.buscarDepoimentoPorId(Number(id));
        res.json(depoimento); 
    } catch (error) {
        res.status(404).json({error: error.message || 'Depoimento não encontrado'});
    }
};

const adicionarDepoimento = async (req, res) => {
    try {
        const { descricaoDep, dataHoraDep } = req.body
        
        if (!dataHoraDep || !descricaoDep ) {
            return res.status(400).json({error: 'Todos os campos são obrigatórios'})
        }

        const novoDepoimento = await Depoimento.adicionarDepoimento({
            descricaoDep,
            dataHoraDep,
        });

        res.status(201).json(novoDepoimento);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Erro ao criar depoimento!'});
    }
};

//Exclusivo para uso de administradores da plataforma
const atualizarDepoimento = async (req, res) => {
    try {
        const { id } = req.params;
        const { descricaoDep, dataHoraDep } = req.body
        
        if (!dataHoraDep || !descricaoDep ) {
            return res.status(400).json({error: 'Todos os campos são obrigatórios'})
        }

        const depoimentoAtualizado = await Depoimento.atualizarDepoimento(Number(id), {
            descricaoDep,
            dataHoraDep,
        });

        res.json(depoimentoAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Erro ao atualizar o depoimento'});
    }
};

//Exclusivo para uso de administradores da plataforma
const excluirDepoimento = async (req, res) => {
    try {
        const {id} = req.params;
        await Depoimento.excluirDepoimento(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message || 'Erro ao excluir depoimento'});
    }
};

module.exports = {
    listarDepoimentos,
    buscarDepoimentoPorId,
    adicionarDepoimento,
    atualizarDepoimento,
    excluirDepoimento,
}