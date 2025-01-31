import "../styles/home.css"


const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="container-home">
        <div className="header-home">
          <img src="./src/assets/homeheader.jpg" alt="imagem header" />
        </div>
        <div className="header-text">
          <h2>Seu bem-estar é nossa prioridade, sempre.</h2>
          <h1>Saúde mental acessível e inclusiva, porque você merece o melhor.</h1>
          <p>Apoiamos sua jornada rumo ao equilíbrio emocional e ao sucesso, ajudando você a alcançar a melhor versão de si <spam>mesmo.</spam></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
