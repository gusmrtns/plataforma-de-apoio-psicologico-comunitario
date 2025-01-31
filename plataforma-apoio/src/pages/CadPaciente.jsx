import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom"
import '../styles/CadPaciente.css'

function CadPaciente() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConf, setSenhaConf] = useState("");
    const navigate = useNavigate();

    const validarNome = (e) => {
        const nomeValor = e.target.value;
        setNome(nomeValor);
        if (!/^\w+\s+\w+/.test(nomeValor)) {
            e.target.setCustomValidity("Digite seu nome completo.");
        } else {
            e.target.setCustomValidity("");
        }
    };

    const validarEmail = (e) => {
        const emailValor = e.target.value;
        setEmail(emailValor);
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValor)) {
            e.target.setCustomValidity("Insira um e-mail válido.");
        } else {
            e.target.setCustomValidity("");
        }
    };

    const validarSenha = (e) => {
        const senhaValor = e.target.value;
        setSenha(senhaValor);
        if (!/(?=.*\d)(?=.*[\W_])/.test(senhaValor)) {
            e.target.setCustomValidity("A senha deve conter pelo menos um número e um caractere especial.");
        } else {
            e.target.setCustomValidity("");
        }
    };

    const validarConfirmacaoSenha = (e) => {
        const senhaConfValor = e.target.value;
        setSenhaConf(senhaConfValor);
        if (senhaConfValor !== senha) {
            e.target.setCustomValidity("As senhas não coincidem.");
        } else {
            e.target.setCustomValidity("");
        }
    };

    const handleSubmit = (e) => {
        alert("Formulário enviado com sucesso!");
        navigate("/anamnese");
    };

    return (
       <>
            <div className="container-cad-paciente">
                <div id="div-form">
                    <div className="logo"></div>
                    <form onSubmit={handleSubmit}>
                        <div className="divInput">
                            <FaUser className="icons"/>
                            <input 
                            type="text" 
                            id="nome"
                            placeholder="Nome Completo"
                            onChange={validarNome}
                            required/>
                        </div>
                        <div className="divInput">
                            <MdAlternateEmail className="icons"/>
                            <input 
                            type="email" 
                            id="email" 
                            placeholder="E-mail"
                            onChange={validarEmail}
                            required/>
                        </div>
                        <div className="divInput">
                            <RiLockPasswordFill className="icons"/>
                            <input 
                            type="password" 
                            id="senha" 
                            placeholder="Senha"
                            onChange={validarSenha}
                            required/>
                        </div>
                        <div className="divInput">
                            <RiLockPasswordFill className="icons"/>
                            <input 
                            type="password" 
                            id="senhaC" 
                            placeholder="Confirme sua senha"
                            onChange={validarConfirmacaoSenha}
                            required/>
                        </div>
                        <button className="botao-paciente" type="submit">Finalizar Anamnese</button>
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
