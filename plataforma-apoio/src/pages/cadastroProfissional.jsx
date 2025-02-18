import { useState } from "react";
import { Link } from "react-router-dom"; // Importe o Link para o botão de redirecionamento
import "../styles/cadastroProfissional.css";

// Componentes menores (exemplos)
const DadosPessoais = ({ formData, handleChange }) => (
  <>
    <label>Nome completo:</label>
    <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />

    <label>E-mail:</label>
    <input type="email" name="email" value={formData.email} onChange={handleChange} required />

    <label>Senha:</label>
    <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />

    <label>Confirme sua senha:</label>
    <input type="password" name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} required />
  </>
);

const DadosDocumentos = ({ formData, handleChange }) => (
  <>
    <label>CPF:</label>
    <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} required />

    <label>RG:</label>
    <input type="text" name="rg" value={formData.rg} onChange={handleChange} required />

    <label>CRM:</label>
    <input type="text" name="crm" value={formData.crm} onChange={handleChange} />
  </>
);

const DadosContato = ({ formData, handleChange }) => (
  <>
    <label>Telefone principal:</label>
    <input type="text" name="telefonePrincipal" value={formData.telefonePrincipal} onChange={handleChange} required />

    <label>Telefone secundário (opcional):</label>
    <input type="text" name="telefoneSecundario" value={formData.telefoneSecundario} onChange={handleChange} />
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

    <label>Modalidades de atendimento:</label>
    <select name="modalidade" value={formData.modalidade} onChange={handleChange} required>
      <option value="">Selecione</option>
      <option value="Online">Online</option>
      <option value="Presencial">Presencial</option>
      <option value="Ambas">Ambas</option>
    </select>

    <label>Idiomas:</label>
    <select name="idiomas" value={formData.idiomas} onChange={handleChange} required>
      <option value="">Selecione</option>
      <option value="Português">Português</option>
      <option value="Inglês">Inglês</option>
      <option value="Espanhol">Espanhol</option>
      <option value="Francês">Francês</option>
      <option value="Outro">Outro</option>
    </select>

    <label>Formação:</label>
    <select name="formacao" value={formData.formacao} onChange={handleChange} required>
      <option value="">Selecione</option>
      <option value="Psicologia">Psicologia</option>
      <option value="Psiquiatria">Psiquiatria</option>
      <option value="Terapia Ocupacional">Terapia Ocupacional</option>
      <option value="Outro">Outro</option>
    </select>
  </>
);

const CadastroProfissional = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    cpf: "",
    rg: "",
    crm: "",
    telefonePrincipal: "",
    telefoneSecundario: "",
    dataNascimento: "",
    genero: "",
    nacionalidade: "",
    abordagem: "",
    modalidade: "",
    idiomas: "",
    formacao: "",
    especialidade: "",
    faixaEtaria: "",
    areaAtuacao: "",
    tempoAtuacao: "",
    experiencia: "",
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