const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const listarAtendimentos = async () => {
    return prisma.atendimento.findMany();
};

const buscarAtendimentoPorId = async (id) => {
    const atendimento = await prisma.atendimento.findUnique({
        where: { id }
    });

    if (!atendimento) {
        throw new Error('Atendimento não encontrado');    
    }

    return atendimento;
};

const adicionarAtendimento = async ({dataHoraAtend, statusAtend, avaliacaoAtend, pacienteId, profissionalId}) => {
    const paciente = await prisma.paciente.findUnique({
        where: { id: pacienteId },
    });

    if (!paciente) {
        throw new Error("Paciente não encontrado!");
    }

    const profissional = await prisma.profissional.findUnique({
        where: { id: profissionalId },
    });

    if (!profissional) {
        throw new Error("Profissional não encontrado!");
    }

    return await prisma.atendimento.create({
        data: {
            dataHoraAtend: new Date(dataHoraAtend),
            statusAtend,
            avaliacaoAtend,
            pacienteId,
            profissionalId,
        },
    });
};

const atualizarAtendimento = async (id, {dataHoraAtend, statusAtend, avaliacaoAtend, pacienteId, profissionalId}) => {
    //VERIFICAR SE DEVERIA TER VALIDACAO DE CHAVES ESTRANGEIRAS
    const atendimento = await prisma.atendimento.findUnique({
        where: {id},
    });

    if (!atendimento) {
        throw new Error("Atendimento não encontrado!");
    }

    return await prisma.atendimento.update({
        where: {id},
        data: {
            dataHoraAtend: new Date(dataHoraAtend),
            statusAtend,
            avaliacaoAtend,
            pacienteId,
            profissionalId,
        },
    });
};

const excluirAtendimento = async (id) => {
    const atendimento = await prisma.atendimento.findUnique({
        where: {id},
    });

    if (!atendimento) {
        throw new Error("Atendimento não encontrado");
    }
    await prisma.atendimento.delete({
        where: {id},
    });
};

module.exports = {
    listarAtendimentos,
    buscarAtendimentoPorId,
    adicionarAtendimento,
    atualizarAtendimento,
    excluirAtendimento,
};