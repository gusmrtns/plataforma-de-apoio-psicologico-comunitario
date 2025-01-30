import React, {useState} from "react";
import InputMask from "react-input-mask";

function Pessoal() {
    const [nomeC, setNomeC] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [celular, setCelular] = useState("");
    const [nacao, setNacao] = useState("");
    const [nomeResp1, setResp1] = useState("");
    const [nomeResp2, setResp2] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [genero, setGenero] = useState("");
    const [orienSex, setOrienSex] = useState("");
    const [escolaridade, setEscolaridade] = useState("");
    const [estCivil, setEstCivil] = useState("");
    const [filhos, setFilhos] = useState("");
    const [ocupacao, setOcupacao] = useState("");
    const [moradia, setMoradia] = useState("");
    const [conv, setConv] = useState("");

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
                        onInput={(e) => e.target.setCustomValidity("")}/> <br />
                        <InputMask
                        mask="999.999.999-99"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        onInvalid={(e) => e.target.setCustomValidity("Por favor, insira um CPF válido.")}
                        onInput={(e) => e.target.setCustomValidity("")}>
                            {(inputProps) => <input {...inputProps} type="text" placeholder="CPF" required />}
                        </InputMask>
                        <InputMask
                        mask="99999999-9"
                        value={rg}
                        onChange={(e) => setRg(e.target.value)}
                        onInvalid={(e) => e.target.setCustomValidity("Por favor, insira um RG válido.")}
                        onInput={(e) => e.target.setCustomValidity("")}>
                            {(inputProps) => <input {...inputProps} type="text" placeholder="RG" required/>}
                        </InputMask>
                    </div>
                    <div className="inputs">
                        <InputMask
                        mask="(99) 9 9999-9999"
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                        onInvalid={(e) => e.target.setCustomValidity("Por favor, insira um Número de Celular válido.")}
                        onInput={(e) => e.target.setCustomValidity("")}>
                            {(inputProps) => <input {...inputProps} type="text" placeholder="Celular" required />}
                        </InputMask>
                        <input 
                        type="text" id="nacao"
                        placeholder="Nacionalidade"
                        onChange={(e) => setNacao(e.target.value)}/>
                    </div>
                    <div className="inputs">
                        <input 
                        type="text" id="nomeResp1"
                        placeholder="Nome completo do Responsavél(opcional)"
                        onChange={(e) => setResp1(e.target.value)}/>
                        <input 
                        type="text" id="nomeResp2"
                        placeholder="Nome completo do Responsavél(opcional)"
                        onChange={(e) => setResp2(e.target.value)}/>
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
                    <div className="inputs">
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
                    <div className="inputs">
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
                        <label htmlFor="filhos">Filhos*: </label>
                        <select id="filhos" value={filhos}
                        onChange={(e) => setFilhos(e.target.value)}
                        required
                        onInvalid={(e) => e.target.setCustomValidity("Por favor, selecione uma opção.")}
                        onInput={(e) => e.target.setCustomValidity("")}>
                            <option value="" disabled>Quantidade de Filhos</option>
                            <option value="0">Não tenho</option>
                            <option value="1">1 filho(a)</option>
                            <option value="2">2 filhos(as)</option>
                            <option value="3">3 filhos(as)</option>
                            <option value="4">4 filhos(as)</option>
                            <option value="4+">Mais de 4 filhos(as)</option>
                        </select>
                    </div>
                    <div className="inputs">
                        <label htmlFor="ocupacao">Ocupação Atual: </label>
                        <input 
                        type="text" id="ocupacao"
                        onChange={(e) => setOcupacao(e.target.value)}/> <br />
                        <label htmlFor="moradia">Com quem você reside atualmente?</label> <br />
                        <input 
                        type="text" id="moradia" className="input-maior"
                        onChange={(e) => setMoradia(e.target.value)}/> <br />
                        <label htmlFor="conv">Como tem sido a convivência?</label> <br />
                        <input 
                        type="text" id="conv" className="input-maior"
                        onChange={(e) => setConv(e.target.value)}/>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Pessoal;