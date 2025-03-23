// Navbar.tsx
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <div className="container-navbar">
        <Link to="/" className="logo">
          Plataforma HDC
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/buscar">Buscar Profissionais</Link></li>
          <li><Link to="/cadastroProfissional">Cadastro Profissional</Link></li>

        </ul>
        <ul className="nav-link-login">
          <Link to="/ajuda" className="btn-ajuda">Procurar Ajuda <i class='bx bx-search'></i></Link>
          <Link to="/cadastroPaciente" className="signup">Criar conta</Link>
          <Link to="/Login" className="btn-login">Entrar</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;  