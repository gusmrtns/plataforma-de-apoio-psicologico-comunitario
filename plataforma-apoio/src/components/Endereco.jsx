import React, {useState} from "react";

function Endereco() {
    const [uf, setUf] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");

    return(
        <>
            <div id="Endereco">
            <section>
                    <h2>Endereço</h2>
                    <div className="inputs-endereco">
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
                    <div className="inputs-endereco">
                        <label htmlFor="rua">Rua:</label>
                        <input type="text" id="rua"
                        onChange={(e) => setRua(e.target.value)} />
                        <label htmlFor="numero">Número:</label>
                        <input type="number" id="numero"
                        onChange={(e) => setNumero(e.target.value)}/>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Endereco;