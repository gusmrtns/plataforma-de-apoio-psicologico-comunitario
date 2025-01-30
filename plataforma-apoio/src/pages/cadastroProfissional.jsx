import React, { useState } from "react";
import "../styles/cadastroProfissional.css";

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
    experiencia: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  };

  return (
    <div className="container">
      <h2>Cadastro Profissional</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome completo:</label>
        <input type="text" name="nome" onChange={handleChange} required />

        <label>E-mail:</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Senha:</label>
        <input type="password" name="senha" onChange={handleChange} required />

        <label>Confirme sua senha:</label>
        <input type="password" name="confirmarSenha" onChange={handleChange} required />

        <label>CPF:</label>
        <input type="text" name="cpf" onChange={handleChange} required />

        <label>RG:</label>
        <input type="text" name="rg" onChange={handleChange} required />

        <label>CRM:</label>
        <input type="text" name="crm" onChange={handleChange} />

        <label>Telefone principal:</label>
        <input type="text" name="telefonePrincipal" onChange={handleChange} required />

        <label>Telefone secundário (opcional):</label>
        <input type="text" name="telefoneSecundario" onChange={handleChange} />

        <label>Data de nascimento:</label>
        <input type="date" name="dataNascimento" onChange={handleChange} required />

        <label>Gênero:</label>
        <select name="genero" onChange={handleChange} required>
          <option value="">Selecione</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>

        <label>Nacionalidade:</label>
        <input type="text" name="nacionalidade" onChange={handleChange} required />

        <h3>Dados Profissionais</h3>

<label>Abordagem terapêutica:</label>
<select name="abordagem" onChange={handleChange} required>
  <option value="">Selecione</option>
  <option value="Psicanálise">Psicanálise</option>
  <option value="Terapia Cognitivo-Comportamental">Terapia Cognitivo-Comportamental</option>
  <option value="Gestalt-terapia">Gestalt-terapia</option>
  <option value="Análise do Comportamento">Análise do Comportamento</option>
  <option value="Outra">Outra</option>
</select>

<label>Modalidades de atendimento:</label>
<select name="modalidade" onChange={handleChange} required>
  <option value="">Selecione</option>
  <option value="Online">Online</option>
  <option value="Presencial">Presencial</option>
  <option value="Ambas">Ambas</option>
</select>

<label>Idiomas:</label>
<select name="idiomas" onChange={handleChange} required>
  <option value="">Selecione</option>
  <option value="Português">Português</option>
  <option value="Inglês">Inglês</option>
  <option value="Espanhol">Espanhol</option>
  <option value="Francês">Francês</option>
  <option value="Outro">Outro</option>
</select>

<label>Formação:</label>
<select name="formacao" onChange={handleChange} required>
  <option value="">Selecione</option>
  <option value="Psicologia">Psicologia</option>
  <option value="Psiquiatria">Psiquiatria</option>
  <option value="Terapia Ocupacional">Terapia Ocupacional</option>
  <option value="Outro">Outro</option>
</select>

<label>Especialidade:</label>
<select name="especialidade" onChange={handleChange} required>
  <option value="">Selecione</option>
  <option value="Ansiedade e Depressão">Ansiedade e Depressão</option>
  <option value="Terapia de Casal">Terapia de Casal</option>
  <option value="Psicologia Infantil">Psicologia Infantil</option>
  <option value="Dependência Química">Dependência Química</option>
  <option value="Outra">Outra</option>
</select>

<label>Faixa etária atendida:</label>
<select name="faixaEtaria" onChange={handleChange} required>
  <option value="">Selecione</option>
  <option value="Infantil">Infantil</option>
  <option value="Adolescente">Adolescente</option>
  <option value="Adulto">Adulto</option>
  <option value="Idoso">Idoso</option>
  <option value="Todas as idades">Todas as idades</option>
</select>

<label>Área de atuação:</label>
<select name="areaAtuacao" onChange={handleChange} required>
  <option value="">Selecione</option>
  <option value="Clínica">Clínica</option>
  <option value="Hospitalar">Hospitalar</option>
  <option value="Escolar">Escolar</option>
  <option value="Organizacional">Organizacional</option>
  <option value="Social">Social</option>
  <option value="Outra">Outra</option>
</select>

<label>Tempo de atuação:</label>
<input type="number" name="tempoAtuacao" onChange={handleChange} required min="0" placeholder="Anos de experiência" />

<label>Experiência profissional:</label>
<textarea name="experiencia" onChange={handleChange} required placeholder="Descreva sua experiência"></textarea>

<button type="submit">Finalizar Cadastro</button>

      </form>
    </div>
  );
};

 
export default CadastroProfissional;
