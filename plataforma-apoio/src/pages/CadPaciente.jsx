import React, { useState } from "react";
import Pessoal from "../components/Pessoal";
import Endereco from "../components/Endereco";
import { Link, useNavigate } from "react-router-dom"
import '../styles/CadPaciente.css'

function CadPaciente() {
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        alert("Cadastro Paciente realizada com sucesso!");
        navigate("/usuario");
    };

    return (
       <>
            <div className="container-cad-paciente">
                <div id="div-form">
                    <div className="logo"></div>
                    <form onSubmit={handleSubmit}>
                        <h1>Cadastro Paciente</h1>
                        <Pessoal/>
                        <Endereco/>
                        <div id="divBotaoPaciente">
                            <button className="botao-paciente" type="submit">Finalizar Cadastro</button>
                        </div>
                    </form>
                    <div id="divBotoes">
                        <Link to="/">
                            <button className="botao-paciente">Página Inicial</button>
                        </Link>
                        <Link to="/anamnese">
                            <button className="botao-paciente">Prencher Anamnese</button>
                        </Link>
                    </div>
                </div>
            </div>
       </>
    )
}

export default CadPaciente;
