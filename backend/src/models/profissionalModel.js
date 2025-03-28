const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const listarProfissionais = async () => {
    return prisma.profissional.findMany();
}

const buscarProfissionalPorId = async (id) => {
    const profissional = await prisma.profissional.findUnique({
        where: {id},
        select: {
            nomeProf: true, 
            celularProf: true,
            abordagemProf: true,
            formacaoProf: true,
            matriculaProf: true,
            localizacaoProf: true,
          },
    });

    if (!profissional) {
        throw new Error("Profissional não encontrado");
    }

    return profissional;
};

const adicionarProfissional = async ({ nomeProf, cpfProf, rgProf, celularProf, abordagemProf, formacaoProf, matriculaProf, localizacaoProf, usuarioId }) => {
    const usuario = await prisma.usuario.findUnique({
        where: { id: usuarioId},
    });

    if (!usuario){
        throw new Error("Usuário não encontrado!");
    }

    return await prisma.profissional.create({
        data: {
            nomeProf, 
            cpfProf,
            rgProf,
            celularProf,
            abordagemProf,
            formacaoProf,
            matriculaProf,
            localizacaoProf,
            usuarioId,
        },
    });
};

const atualizarProfissional = async (id, { nomeProf, cpfProf, rgProf, celularProf, abordagemProf, formacaoProf, matriculaProf, localizacaoProf, usuarioId }) => {
    const profissional = await prisma.profissional.findUnique({
        where: {id},
    });

    if (!profissional) {
        throw new Error("Profissional não encontrado!");
    }

    return await prisma.profissional.update({
        where: {id},
        data: {
            nomeProf, 
            cpfProf,
            rgProf,
            celularProf,
            abordagemProf,
            formacaoProf,
            matriculaProf,
            localizacaoProf,
            usuarioId,
        },
    });
}

const excluirProfissional = async (id) => {
    const profissional = await prisma.profissional.findUnique({
        where: {id},
    });

    if (!profissional) {
        throw new Error("Profissional não encontrado");
    }

    await prisma.profissional.delete({
        where: {id},
    });
}

module.exports = {
    listarProfissionais,
    buscarProfissionalPorId,
    adicionarProfissional,
    atualizarProfissional,
    excluirProfissional,
}