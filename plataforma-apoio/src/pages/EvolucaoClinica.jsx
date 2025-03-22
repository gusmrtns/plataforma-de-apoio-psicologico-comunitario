import React, {useState} from "react";
import Historico from "../components/Historico";
import { Link, useNavigate } from "react-router-dom"
import '../styles/Anamnese.css'

function EvolucaoClinica() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        alert("Evolução Clínica realizada com sucesso!");
        navigate("/usuario");
    };

    return (
        <>
            <div className="anamnese-background"></div> {/* Aqui está a classe do fundo */}
        <div className="anamnese-container">
            <form id="divform-anam" onSubmit={handleSubmit}>
                <h1>Evolução Clínica</h1>
                <Historico/>
                <div className="divBotao">
                    <button className="botao-anamnese" type="submit">Finalizar Evolução Clínica</button>
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

export default EvolucaoClinica;