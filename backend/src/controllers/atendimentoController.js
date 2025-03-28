const Atendimento = require("../models/atendimentoModel");
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const listarAtendimentos = async (req, res) => {
    try {
        const { userId, tipoUsuar } = req.user;
        let atendimentos;

        if (tipoUsuar === "Paciente") {
            const paciente = await prisma.paciente.findUnique({ where: { usuarioId: userId } });
            if (!paciente) return res.status(403).json({ error: "Paciente não encontrado" });
            atendimentos = await Atendimento.listarAtendimentosPorPaciente(paciente.id);
        } else if (tipoUsuar === "Profissional") {
            const profissional = await prisma.profissional.findUnique({ where: { usuarioId: userId } });
            if (!profissional) return res.status(403).json({ error: "Profissional não encontrado" });
            atendimentos = await Atendimento.listarAtendimentosPorProfissional(profissional.id);
        } else {
            return res.status(403).json({ error: "Acesso negado" });
        }

        res.json(atendimentos);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao listar atendimentos!" });
    }
};

const buscarAtendimentoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, tipoUsuar } = req.user;

        const atendimento = await Atendimento.buscarAtendimentoPorId(Number(id));
        if (!atendimento) return res.status(404).json({ error: "Atendimento não encontrado" });

        if (tipoUsuar === "Paciente") {
            const paciente = await prisma.paciente.findUnique({ where: { usuarioId: userId } });
            if (!paciente || atendimento.pacienteId !== paciente.id) return res.status(403).json({ error: "Acesso negado" });
        } else if (tipoUsuar === "Profissional") {
            const profissional = await prisma.profissional.findUnique({ where: { usuarioId: userId } });
            if (!profissional || atendimento.profissionalId !== profissional.id) return res.status(403).json({ error: "Acesso negado" });
        }

        res.json(atendimento);
    } catch (error) {
        res.status(404).json({ error: error.message || "Atendimento não encontrado" });
    }
};

const adicionarAtendimento = async (req, res) => {
    try {
        const { dataHoraAtend, statusAtend, avaliacaoAtend, profissionalId, pacienteId } = req.body;
        const { userId, tipoUsuar } = req.user;

        if (!dataHoraAtend || !statusAtend) {
            return res.status(400).json({ error: "Data e hora e status são obrigatórios" });
        }

        let paciente, profissional;
        if (tipoUsuar === "Paciente") {
            paciente = await prisma.paciente.findUnique({ where: { usuarioId: userId } });
            if (!paciente) {
                return res.status(403).json({ error: "Paciente não encontrado" });
            }

            if (!profissionalId) {
                return res.status(400).json({ error: "ProfissionalId é obrigatório para pacientes" });
            }

            profissional = await prisma.profissional.findUnique({ where: { id: profissionalId } });
            if (!profissional) {
                return res.status(404).json({ error: "Profissional não encontrado" });
            }

            novoAtendimento = await Atendimento.adicionarAtendimento({
                dataHoraAtend,
                statusAtend,
                avaliacaoAtend,
                pacienteId: paciente.id, 
                profissionalId,
            });
        } else if (tipoUsuar === "Profissional") {
            profissional = await prisma.profissional.findUnique({ where: { usuarioId: userId } });
            if (!profissional) {
                return res.status(403).json({ error: "Profissional não encontrado" });
            }

            if (!pacienteId) {
                return res.status(400).json({ error: "PacienteId é obrigatório para profissionais" });
            }

            paciente = await prisma.paciente.findUnique({ where: { id: pacienteId } });
            if (!paciente) {
                return res.status(404).json({ error: "Paciente não encontrado" });
            }

            novoAtendimento = await Atendimento.adicionarAtendimento({
                dataHoraAtend,
                statusAtend,
                avaliacaoAtend,
                pacienteId,
                profissionalId: profissional.id, 
            });
        } else {
            return res.status(403).json({ error: "Acesso negado" });
        }

        res.status(201).json(novoAtendimento);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao criar atendimento!" });
    }
};

const atualizarAtendimento = async (req, res) => {
    try {
        const { id } = req.params;
        const { dataHoraAtend, statusAtend, avaliacaoAtend } = req.body;
        const { userId, tipoUsuar } = req.user;

        const atendimento = await Atendimento.buscarAtendimentoPorId(Number(id));
        if (!atendimento) return res.status(404).json({ error: "Atendimento não encontrado" });

        if (tipoUsuar === "Paciente") {
            const paciente = await prisma.paciente.findUnique({ where: { usuarioId: userId } });
            if (!paciente || atendimento.pacienteId !== paciente.id) return res.status(403).json({ error: "Acesso negado" });
        } else if (tipoUsuar === "Profissional") {
            const profissional = await prisma.profissional.findUnique({ where: { usuarioId: userId } });
            if (!profissional || atendimento.profissionalId !== profissional.id) return res.status(403).json({ error: "Acesso negado" });
        }

        const atendimentoAtualizado = await Atendimento.atualizarAtendimento(Number(id), { dataHoraAtend, statusAtend, avaliacaoAtend });
        res.json(atendimentoAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao atualizar o atendimento" });
    }
};

const excluirAtendimento = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, tipoUsuar } = req.user;

        const atendimento = await Atendimento.buscarAtendimentoPorId(Number(id));
        if (!atendimento) return res.status(404).json({ error: "Atendimento não encontrado" });

        if (tipoUsuar === "Paciente") {
            const paciente = await prisma.paciente.findUnique({ where: { usuarioId: userId } });
            if (!paciente || atendimento.pacienteId !== paciente.id) return res.status(403).json({ error: "Acesso negado" });
        } else if (tipoUsuar === "Profissional") {
            const profissional = await prisma.profissional.findUnique({ where: { usuarioId: userId } });
            if (!profissional || atendimento.profissionalId !== profissional.id) return res.status(403).json({ error: "Acesso negado" });
        }

        await Atendimento.excluirAtendimento(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao excluir atendimento" });
    }
};

module.exports = {
    listarAtendimentos,
    buscarAtendimentoPorId,
    adicionarAtendimento,
    atualizarAtendimento,
    excluirAtendimento,
};

