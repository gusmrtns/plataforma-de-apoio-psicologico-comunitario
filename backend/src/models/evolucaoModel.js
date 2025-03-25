const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const listarEvolucoes = async () => {
    return prisma.evolucaoClinica.findMany();
};

const buscarEvolucaoPorId = async () => {
    const evolucao = await prisma.evolucaoClinica.findUnique({
        where: {id}
    });

    if (!evolucao) {
        throw new Error("Evolução Clínica não encontrada");
    }

    return evolucao;
};

const adicionarEvolucao = async ({ relatorioEvolClin, ajusteTratamentoEvolClin, histFamiEvolClin, problEvolClin, medicEvolClin, qualSonoEvolClin, apetiteEvolClin, pensNegEvolClin, pacienteId, profissionalId, atendimentoId }) => {
    const paciente = await prisma.paciente.findUnique({
        where: { id: pacienteId},
    });

    if (!paciente) {
        throw new Error("Paciente não encontrado");
    }

    const profissional = await prisma.profissional.findUnique({
        where: { id: profissionalId},
    });

    if (!profissional) {
        throw new Error("Profissional não encontrado");
    }

    //USAR MESMO QUE SEJA OPCIONAL?
    const atendimento = await prisma.atendimento.findUnique({
        where: { id: atendimentoId},
    });

    if (!atendimento) {
        throw new Error("Atendimento não encontrado");
    }

    return await prisma.evolucaoClinica.create({
        data: {
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
        },
    });
};

const atualizarEvolucao = async (id, { relatorioEvolClin, ajusteTratamentoEvolClin, histFamiEvolClin, problEvolClin, medicEvolClin, qualSonoEvolClin, apetiteEvolClin, pensNegEvolClin, pacienteId, profissionalId, atendimentoId }) => {
    const evolucao = await prisma.evolucaoClinica.findUnique({
        where: {id},
    });

    if (!evolucao) {
        throw new Error("Evolução Clínica não encontrado!");
    }

    return await prisma.evolucaoClinica.update({
        where: {id},
        data: {
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
        },
    });
};

const excluirEvolucao = async (id) => {
    const evolucao = await prisma.evolucaoClinica.findUnique({
        where: {id},
    });

    if (!evolucao) {
        throw new Error("Evolução Clínica não encontrado!");
    }

    await prisma.evolucaoClinica.delete({
        where: {id},
    });
};

module.exports = {
    listarEvolucoes,
    buscarEvolucaoPorId,
    adicionarEvolucao,
    atualizarEvolucao,
    excluirEvolucao,
}