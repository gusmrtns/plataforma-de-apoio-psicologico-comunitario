const express = require('express');

const grupoApoioRoutes = require('./routes/grupoApoioRoutes');
const atendimentoRoutes = require('./routes/atendimentoRoutes');
const profissionalRoutes = require('./routes/profissionalRoutes');

const app = express();

app.use(express.json());
app.use('/grupo-apoio', grupoApoioRoutes);
app.use('/atendimento', atendimentoRoutes);
app.use('/profissional', profissionalRoutes);

module.exports = app;