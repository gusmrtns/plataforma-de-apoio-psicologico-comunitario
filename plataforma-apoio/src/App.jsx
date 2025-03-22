import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import CadPaciente from './pages/CadPaciente';
import CadastroProfissional from './pages/cadastroProfissional';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Busca from "./components/Busca";
import "./styles/App.css";
import Visualizar from './pages/visualizar';
import Usuario from './pages/usuario';
import Profi from './pages/profissional'
import EvolucaoClinica from "./pages/EvolucaoClinica";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cadastroProfissional" element={<CadastroProfissional />} />
          <Route path="/cadastroPaciente" element={<CadPaciente />} />
          <Route path="/evolucaoClinica" element={<EvolucaoClinica />} />
          <Route path="/ajuda" element={<Busca />} />
          <Route path="/visualizar" element={<Visualizar />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/profissional" element={<Profi />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}


export default App;

