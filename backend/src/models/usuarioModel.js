const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//função desativada para que os dados não fiquem expostos
const listarUsuarios = async () => {
  return prisma.usuario.findMany({
    select: {
      id: true,
      emailUsuar: true,
      tipoUsuar: true,
    },
  });
};

const buscarUsuarioPorId = async (id) => {
  const usuario = await prisma.usuario.findUnique({
    where: { id },
    select: {
      id: true,
      emailUsuar: true,
      tipoUsuar: true,
    },
  });

  if (!usuario) {
    throw new Error('Usuário não encontrado');
  }

  return usuario;
};

const adicionarUsuario = async ({ emailUsuar, senhaUsuar, tipoUsuar }) => {
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
  await prisma.usuario.delete({ where: { id } });
};

module.exports = {
  //listarUsuarios, //Desativado para evitar exposição de dados
  buscarUsuarioPorId,
  adicionarUsuario,
  atualizarUsuario,
  excluirUsuario,
};
