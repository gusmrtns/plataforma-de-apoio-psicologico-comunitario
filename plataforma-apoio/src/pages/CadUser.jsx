import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function User() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConf, setSenhaConf] = useState("");

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

    return (
       <>
            <div className="container">
                <div className="logo"></div>
                <form>
                    <div className="divInput">
                        <input 
                        type="text" 
                        id="nome"
                        placeholder="Nome Completo"
                        onChange={validarNome}
                        required/>
                        <FaUser/>
                    </div>
                    <div className="divInput">
                        <input 
                        type="email" 
                        id="email" 
                        placeholder="E-mail"
                        onChange={validarEmail}
                        required/>
                        <MdAlternateEmail/>
                    </div>
                    <div className="divInput">
                        <input 
                        type="password" 
                        id="senha" 
                        placeholder="Senha"
                        onChange={validarSenha}
                        required/>
                        <RiLockPasswordFill/>
                    </div>
                    <div className="divInput">
                        <input 
                        type="password" 
                        id="senhaC" 
                        placeholder="Confirme sua senha"
                        onChange={validarConfirmacaoSenha}
                        required/>
                        <RiLockPasswordFill/>
                    </div>
                    <button type="submit">Finalizar Cadastro</button>
                </form>
                <div id="divBotoes">
                    <button>Página Inicial</button>
                    <button>Prencher Anamnese</button>
                </div>
            </div>
       </>
    )
}

export default User;
