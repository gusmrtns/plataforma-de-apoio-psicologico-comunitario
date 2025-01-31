import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import CadPaciente from './pages/CadPaciente';
import Anamnese from './pages/Anamnese';
import CadastroProfissional from './pages/cadastroProfissional';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Busca from "./components/Busca";
import "./styles/App.css";



function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cadastroProfissional" element={<CadastroProfissional />} />
          <Route path="/cadastroPaciente" element={<CadPaciente />} />
          <Route path="/anamnese" element={<Anamnese />} />
          <Route path="/ajuda" element={<Busca />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}


export default App;

