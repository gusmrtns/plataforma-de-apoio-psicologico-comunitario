import React, {useState} from "react";
import '../styles/CompAnam.css'

function Historico() {
    const [probl, setProbl] = useState("");
    const [medic, setMedic] = useState("");
    const [subst, setSubst] = useState("");

    const [emoc, setEmoc] = useState("");
    const [qualSono, setQualSono] = useState("");
    const [apetite, setApetite] = useState("");
    const [pensNeg, setPensNeg] = useState("");

    return (
       <>
            <div id="historico">
                <section>
                    <h2>Histórico de Saúde Física</h2>
                    <label htmlFor="probl">Você tem ou já teve problemas de saúde física*?</label> <br />
                    <textarea value={probl} id="probl" className="input-maior"
                    onChange={ (e) => setProbl(e.target.value)}
                    placeholder="Se sim, quais?"
                    required
                    onInvalid={(e) => e.target.setCustomValidity("Por favor, preencha o campo para prosseguir.")}
                    onInput={(e) => e.target.setCustomValidity("")}/> <br />
                    <label htmlFor="medic">Usa alguma medicação ou faz acompanhamento médico*?</label> <br />
                    <textarea value={medic} id="medic" className="input-maior"
                    onChange={(e) => setMedic(e.target.value)}
                    placeholder="Se sim, especifique"
                    required
                    onInvalid={(e) => e.target.setCustomValidity("Por favor, preencha o campo para prosseguir.")}
                    onInput={(e) => e.target.setCustomValidity("")}/> <br />
                    <label htmlFor="subst">Faz uso de alguma substância?</label> <br />
                    <textarea value={subst} id="subst" className="input-maior"
                    onChange={(e) => setSubst(e.target.value)}
                    placeholder="Ex: Álcool, Drogas, Tabaco"/>
                </section>
                <section>
                    <h2>Estado Emocional e Funcional</h2>
                    <label htmlFor="emoc">Quais emoções têm predominado ultimamente?</label> <br />
                    <textarea value={emoc} id="emoc" className="input-maior"
                    onChange={(e) => setEmoc(e.target.value)}
                    placeholder="Ex: Tristeza, Ansiedade, Raiva"/> <br />
                    <label htmlFor="qualSono">Como está sua qualidade de sono?</label> <br />
                    <textarea value={qualSono} id="qualSono" className="input-maior" 
                    onChange={(e) => setQualSono(e.target.value)}
                    placeholder="Dificuldades para dormir?"/> <br />
                    <label htmlFor="apetite">Como está seu apetite?</label> <br />
                    <textarea value={apetite} id="apetite" className="input-maior"
                    onChange={(e) => setApetite(e.target.value)}
                    placeholder="Normal, Diminuído, Aumentado?"/> <br />
                    <label htmlFor="pensNeg">Presença de pensamentos negativos ou repetitivos?</label> <br />
                    <textarea value={pensNeg} id="pensNeg" className="input-maior"
                    onChange={(e) => setPensNeg(e.target.value)}/>
                </section>
            </div>
       </>
    )
}

export default Historico;