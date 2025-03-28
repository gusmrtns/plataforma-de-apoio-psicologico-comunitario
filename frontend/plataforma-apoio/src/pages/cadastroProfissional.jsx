import { useState } from "react";
import { Link } from "react-router-dom"; // Importe o Link para o botão de redirecionamento
import "../styles/cadastroProfissional.css";

// Componentes menores (exemplos)
const DadosPessoais = ({ formData, handleChange }) => (
  <>
    <label>Nome completo:</label>
    <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
  </>
);

const DadosDocumentos = ({ formData, handleChange }) => (
  <>
    <label>CPF:</label>
    <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} required />

    <label>RG:</label>
    <input type="text" name="rg" value={formData.rg} onChange={handleChange} required />

    <label>Matrícula Profissional:</label>
    <input type="text" name="matriculaProfissional" value={formData.matriculaProfissional} onChange={handleChange} />
  </>
);

const DadosContato = ({ formData, handleChange }) => (
  <>
    <label>Telefone principal:</label>
    <input type="text" name="telefonePrincipal" value={formData.telefonePrincipal} onChange={handleChange} required />
  </>
);

const DadosProfissionais = ({ formData, handleChange }) => (
  <>
    <h3>Dados Profissionais</h3>

    <label>Abordagem terapêutica:</label>
    <select name="abordagem" value={formData.abordagem} onChange={handleChange} required>
      <option value="">Selecione</option>
      <option value="Psicanálise">Psicanálise</option>
      <option value="Terapia Cognitivo-Comportamental">Terapia Cognitivo-Comportamental</option>
      <option value="Gestalt-terapia">Gestalt-terapia</option>
      <option value="Análise do Comportamento">Análise do Comportamento</option>
      <option value="Outra">Outra</option>
    </select>

    <label>Formação:</label>
    <select name="formacao" value={formData.formacao} onChange={handleChange} required>
      <option value="">Selecione</option>
      <option value="Psicologia">Psicologia</option>
      <option value="Psiquiatria">Psiquiatria</option>
      <option value="Terapia Ocupacional">Terapia Ocupacional</option>
      <option value="Outro">Outro</option>
    </select>

    <label>Localização (Região geográfica que atende):</label>
    <input type="text" name="localizacao" value={formData.localizacao} onChange={handleChange} required />
  </>
);

const CadastroProfissional = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    rg: "",
    matriculaProfissional: "",
    telefonePrincipal: "",
    dataNascimento: "",
    genero: "",
    nacionalidade: "",
    abordagem: "",
    formacao: "",
    especialidade: "",
    faixaEtaria: "",
    areaAtuacao: "",
    tempoAtuacao: "",
    experiencia: "",
    localizacao: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  };

  return (
    <>
      <div className="background-container"></div> {/* Fundo */}
      <div className="container-cadastro-profissional">
        <form id="divform-cadastro" onSubmit={handleSubmit}>
          <h2>Cadastro Profissional</h2>
          <DadosPessoais formData={formData} handleChange={handleChange} />
          <DadosDocumentos formData={formData} handleChange={handleChange} />
          <DadosContato formData={formData} handleChange={handleChange} />
          <DadosProfissionais formData={formData} handleChange={handleChange} />
          <div className="divBotao">
            <button className="botao-cadastro" type="submit">Finalizar Cadastro</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CadastroProfissional;
