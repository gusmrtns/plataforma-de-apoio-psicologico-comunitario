const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarEnderecos = async () => {
  return prisma.endereco.findMany({
    include: {
      paciente: true,  // Inclui as informações do paciente associado
    },
  });
};

const buscarEnderecoPorId = async (id) => {
  const endereco = await prisma.endereco.findUnique({
    where: { id },
    include: {
      paciente: true,  // Inclui as informações do paciente associado
    },
  });

  if (!endereco) {
    throw new Error('Endereço não encontrado');
  }

  return endereco;
};

const adicionarEndereco = async ({ ufEnd, cidadeEnd, bairroEnd, ruaEnd, numeroEnd, pacienteId }) => {
  const paciente = await prisma.paciente.findUnique({
    where: { id: pacienteId },
  });

  if (!paciente) {
    throw new Error('Paciente não encontrado!');
  }

  return await prisma.endereco.create({
    data: {
      ufEnd,
      cidadeEnd,
      bairroEnd,
      ruaEnd,
      numeroEnd,
      pacienteId,
    },
  });
};

const atualizarEndereco = async (id, { ufEnd, cidadeEnd, bairroEnd, ruaEnd, numeroEnd }) => {
  const endereco = await prisma.endereco.findUnique({
    where: { id },
  });

  if (!endereco) {
    throw new Error('Endereço não encontrado!');
  }

  return await prisma.endereco.update({
    where: { id },
    data: {
      ufEnd,
      cidadeEnd,
      bairroEnd,
      ruaEnd,
      numeroEnd,
    },
  });
};

const excluirEndereco = async (id) => {
  const endereco = await prisma.endereco.findUnique({
    where: { id },
  });

  if (!endereco) {
    throw new Error('Endereço não encontrado');
  }

  await prisma.endereco.delete({
    where: { id },
  });
};

module.exports = {
  listarEnderecos,
  buscarEnderecoPorId,
  adicionarEndereco,
  atualizarEndereco,
  excluirEndereco,
};
