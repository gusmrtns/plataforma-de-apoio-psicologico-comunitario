const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const listarGrupos = async () => {
    return prisma.grupo_apoio.findMany();
};

const buscarGrupoPorId = async (id) => {
    const grupo = await prisma.grupo_apoio.findUnique({
        where: { id }
    });

    if (!grupo) {
        throw new Error('Grupo não encontrado');
    }

    return grupo;
  };

const adicionarGrupo = async ({nome_grupo, descricao_grupo, regiao_grupo}) => {
    return await prisma.grupo_apoio.create({
        data: {nome_grupo, descricao_grupo, regiao_grupo },
    });
};

const atualizarGrupo = async (id, {nome_grupo, descricao_grupo, regiao_grupo}) => {
    const grupo = await prisma.grupo_apoio.findUnique({
        where: {id}
    });

    if(!grupo) {
        throw new Error('Grupo não encontrado');
    }

    return await prisma.grupo_apoio.update({
        where: {id},
        data: { nome_grupo, descricao_grupo, regiao_grupo }, 
    });
};

const excluirGrupo = async (id) => {
    const grupo = await prisma.grupo_apoio.findUnique({
        where: {id},
    });

    if(!grupo) {
        throw new Error('Grupo não encontrado'); 
    }

    await prisma.grupo_apoio.delete({
        where: {id},
    });
};

module.exports = {
    listarGrupos,
    buscarGrupoPorId,
    adicionarGrupo,
    atualizarGrupo,
    excluirGrupo,
};