const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarPacientes = async () => {
    return prisma.paciente.findMany({
        select: {
            nomePac: true,
            celularPac: true,
            nomeRespPac: true,
            fotoPac: true,
        },
    });
};

const buscarPacientePorId = async (id) => {
    const paciente = await prisma.paciente.findUnique({
        where: { id },
        select: {
            nomePac: true,
            celularPac: true,
            nomeRespPac: true,
            fotoPac: true,
        },
    });

    if (!paciente) {
        throw new Error('Paciente não encontrado');
    }

    return paciente;
};

const adicionarPaciente = async ({
  nomePac,
  cpfPac,
  rgPac,
  celularPac,
  nomeRespPac,
  generoPac,
  orienSexPac,
  dataNascPac,
  escolaridadePac,
  estCivilPac,
  fotoPac,
  usuarioId,
}) => {
  const usuario = await prisma.usuario.findUnique({
    where: { id: usuarioId },
  });

  if (!usuario) {
    throw new Error('Usuário não encontrado!');
  }

  return await prisma.paciente.create({
    data: {
      nomePac,
      cpfPac,
      rgPac,
      celularPac,
      nomeRespPac,
      generoPac,
      orienSexPac,
      dataNascPac: new Date(dataNascPac), 
      escolaridadePac,
      estCivilPac,
      fotoPac,
      usuarioId,
    },
  });
};

const atualizarPaciente = async (id,usuarioId,{
      nomePac,
      cpfPac,
      rgPac,
      celularPac,
      nomeRespPac,
      generoPac,
      orienSexPac,
      dataNascPac,
      escolaridadePac,
      estCivilPac,
      fotoPac,
    }
  ) => {
    const paciente = await prisma.paciente.findUnique({
      where: { id },
    });
  
    if (!paciente) {
      throw new Error('Paciente não encontrado!');
    }
  
    return await prisma.paciente.update({
      where: { id },
      data: {
        nomePac,
        cpfPac,
        rgPac,
        celularPac,
        nomeRespPac,
        generoPac,
        orienSexPac,
        dataNascPac,
        escolaridadePac,
        estCivilPac,
        fotoPac,
      },
    });
  };

  const excluirPaciente = async (id) => {
    const paciente = await prisma.paciente.findUnique({ where: { id } });

    if (!paciente) throw new Error('Paciente não encontrado');

    await prisma.atendimento.updateMany({
        where: { pacienteId: id },
        data: { pacienteId: null },
    });

    await prisma.consulta.updateMany({
        where: { pacienteId: id },
        data: { pacienteId: null },
    });

    await prisma.paciente.delete({ where: { id } });
};

module.exports = {
  listarPacientes,
  buscarPacientePorId,
  adicionarPaciente,
  atualizarPaciente,
  excluirPaciente,
};
