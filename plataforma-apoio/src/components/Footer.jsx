import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Plataforma de Apoio Psicológico Comunitário</p>
        <ul className="footer-links">
          <li><Link to="/termos">Termos de Uso</Link></li>
          <li><Link to="/privacidade">Política de Privacidade</Link></li>
        </ul>
        <div className="social-media">
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
