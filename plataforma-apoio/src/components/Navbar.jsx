// Navbar.tsx
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-navbar">
        <Link to="/" className="logo">
          Plataforma HDC
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/buscar">Buscar Profissionais</Link></li>
          <Link to="/ajuda" className="btn-ajuda">Procurar Ajuda Agora</Link>
          <li><Link to="/cadastroPaciente">Cadastro de Paciente</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/cadastroProfissional">Cadastro Profissional</Link></li>

        </ul>
        <Link to="/ajuda" className="btn-ajuda">
          Procurar Ajuda Agora
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;