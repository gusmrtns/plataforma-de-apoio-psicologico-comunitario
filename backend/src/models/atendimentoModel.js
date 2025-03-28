const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

// const listarAtendimentos = async () => {
//     return prisma.atendimento.findMany();
// };

const listarAtendimentosPorPaciente = async (pacienteId) => {
    return prisma.atendimento.findMany({ where: { pacienteId } });
};

const listarAtendimentosPorProfissional = async (profissionalId) => {
    return prisma.atendimento.findMany({ where: { profissionalId } });
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

const atualizarAtendimento = async (id, {dataHoraAtend, statusAtend, avaliacaoAtend}) => {
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
    listarAtendimentosPorPaciente,
    listarAtendimentosPorProfissional,
    buscarAtendimentoPorId,
    adicionarAtendimento,
    atualizarAtendimento,
    excluirAtendimento,
};