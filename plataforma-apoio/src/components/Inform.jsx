import React, {useState} from "react";

function Inform() {
    const [uf, setUf] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");

    const [motivo, setMotivo] = useState("");
    const [percep, setPercep] = useState("");
    const [evoluc, setEvoluc] = useState("");
    const [resolv, setResolv] = useState("");
    const [afetVida, setAfetVida] = useState("");
    const [histFami, setHistFami] = useState("");

    return (
        <>
            <div id="informs">
                <section>
                    <h2>Endereço</h2>
                    <div className="inputs">
                        <label htmlFor="uf">UF:</label>
                        <select id="uf" value={uf}
                        onChange={(e) => setUf(e.target.value)}>
                            <option value="" disabled>Unidade Federativa</option>
                            <option value="ac">AC</option>
                            <option value="al">AL</option>
                            <option value="am">AM</option>
                            <option value="ba">BA</option>
                            <option value="ce">CE</option>
                            <option value="es">ES</option>
                            <option value="go">GO</option>
                            <option value="ma">MA</option>
                            <option value="mt">MT</option>
                            <option value="ms">MS</option>
                            <option value="mg">MG</option>
                            <option value="pa">PA</option>
                            <option value="pb">PB</option>
                            <option value="pr">PR</option>
                            <option value="pe">PE</option>
                            <option value="pi">PI</option>
                            <option value="rj">RJ</option>
                            <option value="rn">RN</option>
                            <option value="rs">RS</option>
                            <option value="ro">RO</option>
                            <option value="rr">RR</option>
                            <option value="sc">SC</option>
                            <option value="sp">SP</option>
                            <option value="se">SE</option>
                            <option value="to">TO</option>
                            <option value="df">DF</option>
                        </select>
                        <label htmlFor="cidade">Cidade:</label>
                        <input type="text" id="cidade"
                        onChange={(e) => setCidade(e.target.value)} />
                        <label htmlFor="bairro">Bairro:</label>
                        <input type="text" id="bairro"
                        onChange={(e) => setBairro(e.target.value)} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="rua">Rua:</label>
                        <input type="text" id="rua"
                        onChange={(e) => setRua(e.target.value)} />
                        <label htmlFor="numero">Número:</label>
                        <input type="number" id="numero"
                        onChange={(e) => setNumero(e.target.value)}/>
                    </div>
                </section>
                <section>
                    <h2>Atendimento</h2>
                    <label htmlFor="motivo">Qual o principal motivo que o trouxe a terapia*?</label> <br/>
                    <textarea value={motivo} id="motivo" className="input-maior"
                    onChange={(e) => setMotivo(e.target.value)}
                    required
                    onInvalid={(e) => e.target.setCustomValidity("Por favor, preencha o campo para prosseguir.")}
                    onInput={(e) => e.target.setCustomValidity("")}/> <br/>
                    <label htmlFor="percep">Como você percebe o problema e suas consequências na sua vida*?</label> <br/>
                    <textarea value = {percep} id="percep" className="input-maior"
                    onChange={(e) => setPercep(e.target.value)}
                    required
                    onInvalid={(e) => e.target.setCustomValidity("Por favor, preencha o campo para prosseguir.")}
                    onInput={(e) => e.target.setCustomValidity("")}/> <br/>
                    <label htmlFor="evoluc">Quando o problema começou e como evoluiu*?</label> <br/>
                    <textarea value = {evoluc} id="evoluc" className="input-maior"
                    onChange={(e) => setEvoluc(e.target.value)}
                    required
                    onInvalid={(e) => e.target.setCustomValidity("Por favor, preencha o campo para prosseguir.")}
                    onInput={(e) => e.target.setCustomValidity("")}/> <br/>
                    <label htmlFor="resolv">Você tentou resolver o problema antes*?</label> <br/>
                    <textarea value = {resolv} id="resolv" className="input-maior"
                    placeholder="Se sim, como?"
                    onChange={(e) => setResolv(e.target.value)} 
                    required
                    onInvalid={(e) => e.target.setCustomValidity("Por favor, preencha o campo para prosseguir.")}
                    onInput={(e) => e.target.setCustomValidity("")}/> <br/>
                    <label htmlFor="afetVida">De que forma esse problema tem afetado sua vida?</label> <br/>
                    <textarea value = {afetVida} id="afetVida" className="input-maior"
                    onChange={(e) => setAfetVida(e.target.value)} /> <br/>
                    <label htmlFor="histFami">Há histórico de transtornos psicológicos na família?</label> <br/>
                    <textarea value = {histFami} id="histFami" className="input-maior"
                    onChange={(e) => setHistFami(e.target.value)} /> <br/> 
                </section>
            </div>
        </>
    )
}

export default Inform;