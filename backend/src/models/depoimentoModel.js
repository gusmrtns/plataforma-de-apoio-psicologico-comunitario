const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const listarDepoimentos = async () => {
    return prisma.depoimento.findMany();
};

const buscarDepoimentoPorId = async (id) => {
    const depoimento = await prisma.depoimento.findUnique({
        where: { id }
    });

    if (!depoimento) {
        throw new Error('Depoimento não encontrado');    
    }

    return depoimento;
};

const adicionarDepoimento = async ({descricaoDep, dataHoraDep}) => {
    return await prisma.depoimento.create({
        data: {descricaoDep, dataHoraDep: new Date(dataHoraDep),},
    });
};

//Exclusivo para uso de administradores da plataforma
const atualizarDepoimento = async (id, {descricaoDep, dataHoraDep}) => {
    const depoimento = await prisma.depoimento.findUnique({
        where: {id},
    });

    if (!depoimento) {
        throw new Error("Depoimento não encontrado!");
    }

    return await prisma.depoimento.update({
        where:{id},
        data: {descricaoDep, dataHoraDep: new Date(dataHoraDep),},
    });
};

//Exclusivo para uso de administradores da plataforma
const excluirDepoimento = async (id) => {
    const depoimento = await prisma.depoimento.findUnique({
        where: {id},
    });

    if (!depoimento) {
        throw new Error("Depoimento não encontrado!");
    }

    await prisma.depoimento.delete({
        where: {id},
    });
};

module.exports = {
    listarDepoimentos,
    buscarDepoimentoPorId,
    adicionarDepoimento,
    atualizarDepoimento,
    excluirDepoimento,
}