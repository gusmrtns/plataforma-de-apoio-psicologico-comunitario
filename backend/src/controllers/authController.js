const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { emailUsuar, senhaUsuar, tipoUsuar } = req.body;

  if (!emailUsuar || !senhaUsuar || !tipoUsuar) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }

  try {
    const hashedPassword = await bcrypt.hash(senhaUsuar, 10);

    const novoUsuario = await prisma.usuario.create({
      data: {
        emailUsuar,
        senhaUsuar: hashedPassword,
        tipoUsuar,
      },
    });

    return res.status(201).json({ message: "Usuário registrado com sucesso!", usuario: novoUsuario });
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);

    if (error.code === "P2002") {
      return res.status(400).json({ error: "Email já cadastrado!" });
    }

    return res.status(500).json({ error: "Erro ao registrar usuário" });
  }
};


const login = async (req, res) => {
  try {
    const { emailUsuar, senhaUsuar } = req.body;

    const user = await prisma.usuario.findUnique({ where: { emailUsuar } });
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const validPassword = await bcrypt.compare(senhaUsuar, user.senhaUsuar);
    if (!validPassword) {
      return res.status(401).json({ error: "Senha inválida" });
    }

    const token = jwt.sign(
      { userId: user.id, tipoUsuar: user.tipoUsuar },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer login" });
  }
};

module.exports = { register, login };
