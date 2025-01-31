import './styles/App.css'
import './styles/Global.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import CadPaciente from './pages/CadPaciente';
import Anamnese from './pages/Anamnese';
import CadastroProfissional from './pages/cadastroProfissional';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastroProfissional" element={<CadastroProfissional />} />
        <Route path="/cadastroPaciente" element={<CadPaciente />} />
        <Route path="/anamnese" element={<Anamnese />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

