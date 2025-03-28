import { Link } from "react-router-dom";
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
        <section className="coments-container">

          <div className="title-coments">
            <h1>Veja o <strong>depoimento</strong> de nossos usuários</h1>
          </div>

          <div className="coments">
            <div className="coments-info">
              <img src="./src/assets/anonimo.jpg" alt="imagem de perfil" />
              <h1>"É normal sentir-se perdido(a) em certos momentos da vida. Mas lembre-se, buscar apoio psicológico<br></br>é um passo corajoso e fundamental para o seu bem-estar. Não hesite em procurar ajuda."</h1>
            </div>
            <div className="coments-info">
              <img src="./src/assets/anonimo.jpg" alt="imagem de perfil" />
              <h1>"Se você se sente sobrecarregado(a), não está sozinho(a). Aqui, você encontrará apoio, compreensão e ferramentas para enfrentar os desafios da vida de maneira mais saudável."</h1>
            </div>
            <div className="coments-info">
              <img src="./src/assets/anonimo.jpg" alt="imagem de perfil" />
              <h1>"Procurar apoio foi uma das melhores decisões que tomei. Com o apoio psicológico, aprendi a cuidar de minha saúde mental e a dar passos importantes para meu bem-estar emocional."</h1>
            </div>
          </div>
          <div className="coments-input">
            <h2> Faça seu <strong>depoimento</strong>:</h2>
            <form>
              <label for="depoimento">Seu depoimento:</label>
              <textarea id="depoimento" name="comentario" rows="4" cols="60"></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </section>
        <section className="grupo-apoio">
          <div className="container-apoio">
            <i class='bx bxs-chat' ></i>
            <h1>Precisando de um apoio?<br></br>nossos <strong>grupos de apoio</strong> estão aqui por você</h1>

            <h2>Grupos de Apoio para Ansiedade</h2>
            <h2>Grupos de Apoio para Depressão</h2>
            <h2>Grupos de Apoio para Luto</h2>
            <h2>Grupos de Apoio para Dependência Química (Álcool e Drogas)</h2>
            <h2>Grupos de Apoio para Relações Abusivas</h2>
            <h2>Grupos de Apoio para Pais e Cuidadores</h2>
          </div>
        </section>
        <div className="container-ajuda">
          <div className="ajuda-img">
            <img src="./src/assets/ajuda.jpeg" alt="" />
          </div>
          <div className="ajuda-link">
            <div>
              <h1>Clique se estiver buscando ajuda</h1>
              <Link to="/ajuda" className="ajuda-id">Procurar Ajuda <i class='bx bx-search'></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
