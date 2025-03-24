const GrupoApoio = require('../models/grupoApoioModel');

exports.listarGrupos = async ( req, res ) => {
    try {
        const grupos = await GrupoApoio.listarGrupos();
        res.json(grupos);
    } catch (error) {
        console.error("Ocorreu um erro!", error);
        res.status(500).json({error : error.message || "Erro ao listar grupos"});
    }
}

exports.buscarGrupoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const grupo = await GrupoApoio.buscarGrupoPorId(Number(id));
        res.json(grupo);
    } catch (error) {
        console.error('❌ ERRO AO BUSCAR GRUPO:', error);
        res.status(404).json({ error: error.message || 'Grupo não encontrado' });
    }
}

exports.adicionarGrupo = async (req, res) => {
    try {
        const { nome_grupo, descricao_grupo, regiao_grupo } = req.body;

        if(!nome_grupo || !descricao_grupo || !regiao_grupo ) {
            return res.status(400).json({error: 'Nome, descrição e região são obrigatórios' });
        }

        const novoGrupo = await GrupoApoio.adicionarGrupo({
            nome_grupo,
            descricao_grupo,
            regiao_grupo
        });

        res.status(201).json(novoGrupo);
    } catch (error) {
        console.error('❌ ERRO AO CRIAR GRUPO:', error);
        res.status(500).json({ error: error.message || 'Erro ao criar grupo' });
    }
};

exports.atualizarGrupo = async (req, res) => {
    try {
        const {id} = req.params;
        const { nome_grupo, descricao_grupo, regiao_grupo } = req.body

        if(!nome_grupo || !descricao_grupo || !regiao_grupo) {
            return res.status(400).json({error: 'Nome_gruponome_grupo, descrição e região são obrigatórios'})
        }

        const grupoAtualizado = await GrupoApoio.atualizarGrupo(Number(id), {
            nome_grupo, 
            descricao_grupo,
            regiao_grupo,
        });

        res.json(grupoAtualizado);
    } catch (error) {
        console.error('❌ ERRO AO ATUALIZAR GRUPO:', error);
        res.status(500).json({ error: error.message || 'Erro ao atualizar grupo' });
    }
};

exports.excluirGrupo = async (req, res) => {
    try {
        const {id} = req.params;
        await GrupoApoio.excluirGrupo(Number(id));
        res.status(204).send();
    } catch (error) {
        console.error('❌ ERRO AO EXCLUIR GRUPO:', error);
        res.status(500).json({ error: error.message || 'Erro ao excluir grupo' });
    }
};