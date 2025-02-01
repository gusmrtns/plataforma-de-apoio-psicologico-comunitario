import React, {useState} from "react";
import Pessoal from "../components/Pessoal";
import Inform from "../components/Inform";
import Historico from "../components/Historico";
import { Link, useNavigate } from "react-router-dom"
import '../styles/Anamnese.css'

function Anamnese() {
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [celular, setCelular] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        alert("Anamnese realizada com sucesso!");
        navigate("/usuario");
    };

    return (
        <>
            <div className="anamnese-container">
                <form id="divform-anam" onSubmit={handleSubmit}>
                    <h1>Anamnese Básica</h1>
                    <Pessoal/> 
                    <Inform/>
                    <Historico/>
                    <div className="divBotao">
                        <button className="botao-anamnese" type="submit">Finalizar Anamnese</button>
                    </div>
                </form>
                <div className="divBotao">
                    <Link to="/">
                        <button className="botao-anamnese">Página Inicial</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Anamnese;