const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarUsuarios = async () => {
  return prisma.usuario.findMany();
};

const buscarUsuarioPorId = async (id) => {
  const usuario = await prisma.usuario.findUnique({
    where: { id },
    include: {
      paciente: true,  // Inclui o relacionamento com paciente
      profissional: true,  // Inclui o relacionamento com profissional
    },
  });

  if (!usuario) {
    throw new Error('Usuário não encontrado');
  }

  return usuario;
};

const adicionarUsuario = async ({ emailUsuar, senhaUsuar, tipoUsuar }) => {
  // Verificando se o email já está cadastrado
  const usuarioExistente = await prisma.usuario.findUnique({
    where: { emailUsuar },
  });

  if (usuarioExistente) {
    throw new Error('Email já cadastrado!');
  }

  return await prisma.usuario.create({
    data: {
      emailUsuar,
      senhaUsuar,
      tipoUsuar,
    },
  });
};

const atualizarUsuario = async (id, { emailUsuar, senhaUsuar, tipoUsuar }) => {
  const usuario = await prisma.usuario.findUnique({
    where: { id },
  });

  if (!usuario) {
    throw new Error('Usuário não encontrado!');
  }

  return await prisma.usuario.update({
    where: { id },
    data: {
      emailUsuar,
      senhaUsuar,
      tipoUsuar,
    },
  });
};

const excluirUsuario = async (id) => {
  const usuario = await prisma.usuario.findUnique({
    where: { id },
  });

  if (!usuario) {
    throw new Error('Usuário não encontrado');
  }

  await prisma.usuario.delete({
    where: { id },
  });
};

module.exports = {
  listarUsuarios,
  buscarUsuarioPorId,
  adicionarUsuario,
  atualizarUsuario,
  excluirUsuario,
};
