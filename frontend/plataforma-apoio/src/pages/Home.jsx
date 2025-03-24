import "../styles/home.css";


const Home = () => {
  return (
    <div className="home-wrapper">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <div className="container-home">
        <div className="header-home">
          <img src="./src/assets/homeheader.jpg" alt="imagem header" />
        </div>
        <div className="header-text">
          <h2>Seu bem-estar é nossa prioridade, sempre.</h2>
          <h1>Saúde mental acessível e inclusiva, porque você merece o melhor.</h1>
          <p>Apoiamos sua jornada rumo ao equilíbrio emocional e ao sucesso, ajudando você a alcançar a melhor versão de si <spam>mesmo.</spam></p>
        </div>
        <section className="aboutus">
          <div className="about">
            <i class='bx bx-health'></i>
            <h2>Atendimento gratuito</h2>
          </div>
          <div className="about">
            <i class='bx bxs-wallet'></i>
            <h2>Preços acessíveis</h2>
          </div>
          <div className="about">
            <i class='bx bxs-calendar' ></i>
            <h2>Marque consultas</h2>
          </div>
          <div className="about">
            <i class='bx bxs-face'></i>
            <h2>Variedade <br></br>de profissionais</h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
