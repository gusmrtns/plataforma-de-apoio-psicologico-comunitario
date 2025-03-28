const Endereco = require('../models/enderecoModel');

const listarEnderecos = async (req, res) => {
  try {
    const enderecos = await Endereco.listarEnderecos();
    res.json(enderecos);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Erro ao listar endereços!' });
  }
};

const buscarEnderecoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const endereco = await Endereco.buscarEnderecoPorId(Number(id));
    res.json(endereco);
  } catch (error) {
    res.status(404).json({ error: error.message || 'Endereço não encontrado' });
  }
};

const adicionarEndereco = async (req, res) => {
  try {
    const { ufEnd, cidadeEnd, bairroEnd, ruaEnd, numeroEnd, pacienteId } = req.body;

    if (!ufEnd || !cidadeEnd || !bairroEnd || !ruaEnd || !numeroEnd || !pacienteId) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const novoEndereco = await Endereco.adicionarEndereco({
      ufEnd,
      cidadeEnd,
      bairroEnd,
      ruaEnd,
      numeroEnd,
      pacienteId,
    });

    res.status(201).json(novoEndereco);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Erro ao criar endereço!' });
  }
};

const atualizarEndereco = async (req, res) => {
  try {
    const { id } = req.params;
    const { ufEnd, cidadeEnd, bairroEnd, ruaEnd, numeroEnd } = req.body;

    if (!ufEnd || !cidadeEnd || !bairroEnd || !ruaEnd || !numeroEnd) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const enderecoAtualizado = await Endereco.atualizarEndereco(Number(id), {
      ufEnd,
      cidadeEnd,
      bairroEnd,
      ruaEnd,
      numeroEnd,
    });

    res.json(enderecoAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Erro ao atualizar o endereço' });
  }
};

const excluirEndereco = async (req, res) => {
  try {
    const { id } = req.params;
    await Endereco.excluirEndereco(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message || 'Erro ao excluir endereço' });
  }
};

module.exports = {
  listarEnderecos,
  buscarEnderecoPorId,
  adicionarEndereco,
  atualizarEndereco,
  excluirEndereco,
};
