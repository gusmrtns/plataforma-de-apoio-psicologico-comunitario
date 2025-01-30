import React, {useState} from "react";
import InputMask from "react-input-mask";
import Pessoal from "../components/Pessoal";
import Inform from "../components/Inform";
import Historico from "../components/Historico";

function Paciente() {
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [celular, setCelular] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Formulário enviado com sucesso!");
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Anamnese Básica</h1>
                    <Pessoal/> 
                    <Inform/>
                    <Historico/>
                    <button type="submit">Finalizar Anamnese</button>
                </form>
                <div id="divBotoes">
                    <button>Página Inicial</button>
                </div>
            </div>
        </>
    )
}

export default Paciente;