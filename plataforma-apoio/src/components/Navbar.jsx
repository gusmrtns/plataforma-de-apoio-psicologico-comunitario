// Navbar.tsx
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          Plataforma HDC
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/buscar">Buscar Profissionais</Link></li>
          <li><Link to="/cadastro">Cadastro/Login</Link></li>
        </ul>
        <Link to="/ajuda" className="btn-ajuda">
          Procurar Ajuda Agora
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;