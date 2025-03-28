const express = require('express');

const grupoApoioRoutes = require('./routes/grupoApoioRoutes');
const atendimentoRoutes = require('./routes/atendimentoRoutes');
const profissionalRoutes = require('./routes/profissionalRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const pacienteRoutes = require('./routes/pacienteRoutes');
const enderecoRoutes = require('./routes/enderecoRoutes');
const evolucaoRoutes = require('./routes/evolucaoRoutes');
const depoimentoRoutes = require('./routes/depoimentoRoutes');

const app = express();

app.use(express.json());
app.use('/grupo-apoio', grupoApoioRoutes);
app.use('/atendimento', atendimentoRoutes);
app.use('/profissional', profissionalRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/paciente', pacienteRoutes);
app.use('/endereco', enderecoRoutes);
app.use('/evolucao', evolucaoRoutes);
app.use('/depoimento', depoimentoRoutes);


module.exports = app;