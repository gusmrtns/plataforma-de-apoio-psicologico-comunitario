import "../styles/visualizar.css";

const Visualizar = () => {
    return (
    <div className="visu_body">
    <main>
        <div class="divisor">
        <section class="visu">
            <div class="centro">
                
                <div class="cima">
                    <h1>Psiquiatra</h1>
                    <h1>CRM: CRP 01/XXXXX</h1>
                
                </div>
                
                <div class="imagem_do_perfil">imagem de perfil</div>
                <h1>Nome do profissional</h1>
                <h3>Consultas realizadas:</h3>
                <div class="nume"><p>420</p></div>

                <div class="baixo"> 
                    <h1> Fortaleza, Ceará, Brasil</h1>
                    <button class="retornar"><h1>Página inicial</h1></button>
                </div>
                
            </div>
            
        </section>
        <section class="informa">
            <div class="alinhamento">
                <h1>Sobre mim:</h1>
                <div class="apresenta">
                    <h2>Olá! Eu sou o Dr. Jean de Lemos Cid, psiquiatra dedicado a proporcionar cuidados de saúde mental de alta qualidade para meus pacientes. Com uma abordagem empática e centrada no paciente, meu objetivo é criar um ambiente seguro e acolhedor para todos que buscam meus serviços.</h2>
                </div>
                <h1>Minha abordagem terapêutica:</h1>
                <div className="direc">
                    <div class="cap">
                        <h1>Psicoterapia Cognitivo-Comportamental</h1>
                    </div>
                </div>
                <h1>Especialidade:</h1>
                <div>
                    <div class="direc">
                    <div class="cap"><h1> Ansiedade</h1></div><div class="cap"><h1>Depressão</h1></div><div class="cap"><h1>Transtorno de Ansiedade Generalizada (TAG)</h1></div><div class="cap"><h1>Transtorno de Pânico</h1></div><div class="cap"><h1>Fobia Social</h1></div><div class="cap"><h1> Estresse Pós-Traumático</h1></div><div class="cap"><h1>Trans. obsessivo-Compulsivo</h1></div>
                    </div>
                </div>

                <h1>Faixa etária:</h1>
                <div className="direc">
                    <div class="cap"><h1>Adultos e adolescentes</h1></div>
                </div>
                
                <h1>tempo de atuação:</h1>
                <div className="direc">
                   
                    <div class="cap"><h1>10 anos</h1></div>
                </div>
                    
    
            </div>
        </section>
    </div>
    </main>
    </div> 
    )
    
}

export default Visualizar;