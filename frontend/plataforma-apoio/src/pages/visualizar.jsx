import "../styles/visualizar.css";

const Visualizar = () => {
    return (
        <div className="visu_body">
            <main>
                <div className="divisor">
                    <section className="visu">
                        <div className="centro">

                            <div className="cima">
                                <h1>Psiquiatra</h1>
                                <h1>CRM: CRP 01/XXXXX</h1>

                            </div>
                            <div className="imagem-perfil">
                                <div className="imagem_do_perfil">
                                    <img src="./src/assets/anonimo.jpg" alt="" />
                                </div>
                                <h1>Nome do profissional</h1>
                                <h3>Consultas realizadas:</h3>
                                <div class="nume"><p>0</p></div>
                            </div>

                            <div className="baixo">
                                <h1> Fortaleza, Ceará, Brasil</h1>
                                <h1></h1>
                            </div>
                        </div>

                    </section>
                    <section className="informa">
                        <div className="alinhamento">
                            <h1>Sobre mim:</h1>
                            <div className="apresenta">
                                <h2>Olá! Eu sou o Dr. Jean de Lemos Cid, psiquiatra dedicado a proporcionar cuidados de saúde mental de alta qualidade para meus pacientes. Com uma abordagem empática e centrada no paciente, meu objetivo é criar um ambiente seguro e acolhedor para todos que buscam meus serviços.</h2>
                            </div>
                            <h1>Minha abordagem terapêutica:</h1>
                            <div className="direc">
                                <div className="cap">
                                    <h1>Psicoterapia Cognitivo-Comportamental</h1>
                                </div>
                            </div>
                            <h1>Especialidade:</h1>
                            <div>
                                <div className="direc">
                                    <div className="cap"><h1> Ansiedade</h1></div><div className="cap"><h1>Depressão</h1></div><div className="cap"><h1>Transtorno de Ansiedade Generalizada (TAG)</h1></div><div className="cap"><h1>Transtorno de Pânico</h1></div><div className="cap"><h1>Fobia Social</h1></div><div className="cap"><h1> Estresse Pós-Traumático</h1></div><div className="cap"><h1>Trans. obsessivo-Compulsivo</h1></div>
                                </div>
                            </div>

                            <h1>Faixa etária:</h1>
                            <div className="direc">
                                <div className="cap"><h1>Adultos e adolescentes</h1></div>
                            </div>

                            <h1>tempo de atuação:</h1>
                            <div className="direc">

                                <div className="cap"><h1>10 anos</h1></div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )

}

export default Visualizar;