import React, {useState} from "react";
import InputMask from "react-input-mask";
import '../styles/CompAnam.css'

function Pessoal() {
    const [nomeC, setNomeC] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [celular, setCelular] = useState("");
    const [nomeResp1, setResp1] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [genero, setGenero] = useState("");
    const [orienSex, setOrienSex] = useState("");
    const [escolaridade, setEscolaridade] = useState("");
    const [estCivil, setEstCivil] = useState("");

    return (
        <>
            <div id="pessoal">
                <h2>Identificação Pessoal</h2>
                <section>
                    <div className="inputs">
                        <input 
                        type="text" id="nomeC"
                        placeholder="Nome Completo"
                        onChange={(e) => setNomeC(e.target.value)}
                        required
                        onInvalid={(e) => e.target.setCustomValidity("Por favor, preencha com seu nome completo.")}
                        onInput={(e) => e.target.setCustomValidity("")}/>
                    </div>
                    <div className="inputs">
                        <InputMask
                        mask="999.999.999-99"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        onInvalid={(e) => e.target.setCustomValidity("Por favor, insira um CPF válido.")}
                        onInput={(e) => e.target.setCustomValidity("")}>
                            {(inputProps) => <input {...inputProps} id="cpf" type="text" placeholder="CPF" required />}
                        </InputMask>
                        <InputMask
                        mask="99999999-9"
                        value={rg}
                        onChange={(e) => setRg(e.target.value)}
                        onInvalid={(e) => e.target.setCustomValidity("Por favor, insira um RG válido.")}
                        onInput={(e) => e.target.setCustomValidity("")}>
                            {(inputProps) => <input {...inputProps} id="rg" type="text" placeholder="RG" required/>}
                        </InputMask>
                    </div>
                    <div className="inputs">
                        <InputMask
                        mask="(99) 9 9999-9999"
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                        onInvalid={(e) => e.target.setCustomValidity("Por favor, insira um Número de Celular válido.")}
                        onInput={(e) => e.target.setCustomValidity("")}>
                            {(inputProps) => <input {...inputProps} id="celular" type="text" placeholder="Celular" required />}
                        </InputMask>
                    </div>
                    <div className="inputs">
                        <input 
                        type="text" id="nomeResp1"
                        placeholder="Nome completo do Responsavél(opcional)"
                        onChange={(e) => setResp1(e.target.value)}/>
                    </div>
                    <div className="inputs">
                        <input 
                        type="text" id="genero"
                        placeholder="Gênero(opcional)"
                        onChange={(e) => setGenero(e.target.value)}/>
                        <input 
                        type="text" id="orientSex"
                        placeholder="Orientação Sexual(opcional)"
                        onChange={(e) => setOrienSex(e.target.value)}/>    
                    </div>
                </section>
                <section>
                    <div className="inputs-select">
                        <label htmlFor="nascimento">Data de Nascimento*: </label>
                        <input type="date" id="nascimento"
                        onChange={(e) => setNascimento(e.target.value)}
                        required
                        onInvalid={(e) => e.target.setCustomValidity("Por favor, preencha o campo para prosseguir.")}
                        onInput={(e) => e.target.setCustomValidity("")}/>
                        <label htmlFor="escolaridade">Escolaridade*: </label>
                        <select id="escolaridade" value={escolaridade}
                        onChange={(e) => setEscolaridade(e.target.value)}
                        required
                        onInvalid={(e) => e.target.setCustomValidity("Por favor, selecione uma opção.")}
                        onInput={(e) => e.target.setCustomValidity("")}>
                            <option value="" disabled>Selecione sua Escolaridade</option>
                            <option value="fundI">Fundamental Incompleto</option>
                            <option value="fundC">Fundamental Completo</option>
                            <option value="medioI">Médio Incompleto</option>
                            <option value="medioC">Médio Completo</option>
                            <option value="superI">Superior Incompleto</option>
                            <option value="superC">Superior Completo</option>
                            <option value="posI">Pós-Graduação Incompleto</option>
                            <option value="posC">Pós-Graduação Completo</option>
                        </select>
                    </div>
                    <div className="inputs-select">
                        <label htmlFor="estCivil">Estado Civil*: </label>
                        <select id="estCivil" value={estCivil}
                        onChange={(e) => setEstCivil(e.target.value)}
                        required
                        onInvalid={(e) => e.target.setCustomValidity("Por favor, selecione uma opção.")}
                        onInput={(e) => e.target.setCustomValidity("")}>
                            <option value="" disabled>Selecione seu estado civil</option>
                            <option value="solt">Solteiro(a)</option>
                            <option value="casad">Casado(a)</option>
                            <option value="uniao">União Estavél</option>
                            <option value="divor">Divorciado(a)</option>
                            <option value="viuv">Viúvo(a)</option>
                            <option value="separ">Separado(a) Judicialmente</option>
                            <option value="prefN">Prefiro Não Informar</option>
                        </select>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Pessoal;