
import "../styles/Busca.css";
import ImagemBusca from "../assets/terapeuta_com_paciente_page_busca.jpg";


const Busca = () => {
  return (
    <div className="container">
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
          <div className="busca-campo">
            <input
              type="text"
              placeholder="cidade/região"
              className="busca-input"
            />
            <input
              type="text"
              placeholder="especialidade"
              className="busca-input"
            />
            <input
              type="text"
              placeholder="faixa etária"
              className="busca-input"
            />
          </div>
          <div className="busca-campo">
            <input
              type="text"
              placeholder="presencial/online"
              className="busca-input"
            />
            <input
              type="text"
              placeholder="procure por nome:"
              className="busca-input"
            />
          </div>
          <button type="submit" className="busca-botao">
            Procurar
          </button>
        </form>
        <p className="busca-link-container">
          <a href="#como-funciona" className="busca-link">
            Saiba como funciona
          </a>
        </p>
      </div>
    </div>
  );
};

export default Busca;
