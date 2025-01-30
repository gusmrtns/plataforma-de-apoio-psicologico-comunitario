import "../styles/Busca.css";
import ImagemBusca from "../assets/terapeuta_com_paciente_page_busca.jpg";
import { estados } from "../utils/estados";
import { especialidades } from "../utils/especialidades";
import { faixasEtarias } from "../utils/faixasEtarias";
import { useState } from "react";
import { handleInputChange, handleSugestaoClick } from "../scripts/autocompleteHandlers";
import { profissionaisMock } from "../utils/profissionaisMock";

const Busca = () => {
  const [tipoAtendimento, setTipoAtendimento] = useState("qualquer");
  const [nome, setNome] = useState("");
  const [sugestoes, setSugestoes] = useState([]);

  return (
    <div className="busca-wrapper">
      <div className="imagem-container">
        <div className="imagem-ilustrativa">
          <img src={ImagemBusca} alt="Ilustração de terapeuta com paciente" />
        </div>
      </div>
      <div className="busca-container">
        <h2 className="busca-titulo">Procurar ajuda agora:</h2>
        <p className="busca-subtitulo">
          Agende consultas grátis com profissionais da saúde mental
        </p>
        <form className="busca-form">

          {/* Primeira linha: Cidade, Especialidade e Faixa Etária */}
          <div className="busca-linha">
            {/* Campo de Região */}
            <div className="busca-campo">
              <label htmlFor="estado" className="busca-label">Cidade/Região</label>
              <select id="estado" className="busca-input">
                <option value="">Qualquer</option>
                {estados.map((estado, index) => (
                  <option key={index} value={estado}>{estado}</option>
                ))}
              </select>
            </div>

            {/* Campo de Especialidade */}
            <div className="busca-campo">
              <label htmlFor="especialidade" className="busca-label">Especialidade</label>
              <select id="especialidade" className="busca-input">
                <option value="">Qualquer</option>
                {especialidades.map((especialidade, index) => (
                  <option key={index} value={especialidade}>{especialidade}</option>
                ))}
              </select>
            </div>

            {/* Campo de Faixa Etária */}
            <div className="busca-campo">
              <label htmlFor="faixa-etaria" className="busca-label">Faixa Etária</label>
              <select id="faixa-etaria" className="busca-input">
                <option value="">Qualquer</option>
                {faixasEtarias.map((faixa, index) => (
                  <option key={index} value={faixa}>{faixa}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Segunda linha: Tipo de Atendimento + Nome */}
          <div className="busca-linha">
            {/* Campo de Tipo de Atendimento */}
            <div className="busca-campo">
              <label className="busca-label">Tipo de Atendimento</label>
              <div className="radio-container">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="tipo-atendimento"
                    value="qualquer"
                    checked={tipoAtendimento === "qualquer"}
                    onChange={(e) => setTipoAtendimento(e.target.value)}
                  />
                  Qualquer
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="tipo-atendimento"
                    value="presencial"
                    checked={tipoAtendimento === "presencial"}
                    onChange={(e) => setTipoAtendimento(e.target.value)}
                  />
                  Presencial
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="tipo-atendimento"
                    value="online"
                    checked={tipoAtendimento === "online"}
                    onChange={(e) => setTipoAtendimento(e.target.value)}
                  />
                  Online
                </label>
              </div>
            </div>

            {/* Campo de Procurar por Nome com Autocomplete */}
            <div className="busca-campo autocomplete-container">
              <label htmlFor="nome" className="busca-label">Procurar por Nome</label>
              <input
                type="text"
                id="nome"
                className="busca-input"
                placeholder="Digite o nome completo ou parcial"
                value={nome}
                onChange={(e) =>
                  handleInputChange(e.target.value, profissionaisMock, setSugestoes)
                }
              />
              {sugestoes.length > 0 && (
                <ul className="autocomplete-sugestoes">
                  {sugestoes.map((sugestao, index) => (
                    <li
                      key={index}
                      className="autocomplete-item"
                      onClick={() => handleSugestaoClick(sugestao, setNome, setSugestoes)}
                    >
                      {sugestao}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Botão de busca */}
          <button type="submit" className="busca-botao">Procurar</button>
        </form>
        <p className="busca-link-container">
          <a href="#como-funciona" className="busca-link">Saiba como funciona</a>
        </p>
      </div>
    </div>
  );
};

export default Busca;
