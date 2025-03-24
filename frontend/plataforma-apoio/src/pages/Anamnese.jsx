import React, {useState} from "react";
import Pessoal from "../components/Pessoal";
import Inform from "../components/Inform";
import Historico from "../components/Historico";
import { Link } from "react-router-dom"
import '../styles/Anamnese.css'

function Anamnese() {
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [celular, setCelular] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Formulário enviado com sucesso!");
    };

    return (
        <>
            <div className="anamnese-container">
                <form onSubmit={handleSubmit}>
                    <h1>Anamnese Básica</h1>
                    <Pessoal/> 
                    <Inform/>
                    <Historico/>
                    <button type="submit">Finalizar Anamnese</button>
                </form>
                <div id="divBotoes">
                    <Link to="/">
                        <button className="botao">Página Inicial</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Anamnese;