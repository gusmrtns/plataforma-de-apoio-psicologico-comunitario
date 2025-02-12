import "../styles/profissional.css";

const Profi = () => {
    return (
    <div className="body_prof">
    <main className="separar_quad">
        <section className="sep">
            <div className="quadrado1">
                <div className="prof">
                    <div className="imagem_perfil"><p>imagem de perfil do usuário</p></div>
                    <h1>Nome do profissional</h1>
                    <h3>Consultas realizadas:</h3>
                    <div className="numero"><p>0</p></div>
                </div>

            </div>
            <div className="dados">
                <div className="top_tit"><h1>Dados profissionais</h1></div>
                <div className="info">
                    <div>
                        <h1 className="nome">Dr. Lucas Oliveira Andrade</h1>
                    </div>
                    <h2 className="h2">CRM: CRP 01/XXXXX</h2>
                    <h2 className="h2">CPF: 087......07</h2>
                    <h2 className="h2">RG: 098......04</h2>
                    <h2 className="h2">Data de nascimento: 23/05/1995</h2>
                    <button className="edit"><h1>Editar perfil</h1></button>
                </div>
            </div>
        </section>
        <nav>
            <button><h1>Notificações</h1></button>
            <button><h1>Agenda</h1></button>
            <button><h1>Página inícial</h1></button>
            <button><h1>Histórico</h1></button>
        </nav>
        <section className="apresent">
            <h1>Sobre mim:</h1>
            <div>
                <h2>Olá! Sou o Dr. Lucas Oliveira Andrade, psicólogo especializado em Psicoterapia Cognitivo-Comportamental. Com mais de 10 anos de experiência, ajudo pessoas a superarem desafios emocionais, promovendo bem-estar e qualidade de vida.
                    Minha abordagem foca em identificar e modificar pensamentos e comportamentos disfuncionais, tratando questões como ansiedade e depressão. Atendo adultos e adolescentes em Fortaleza, Ceará, oferecendo um ambiente seguro e acolhedor para o crescimento pessoal.
                    Seja bem-vindo(a) ao meu espaço terapêutico. Juntos, podemos construir uma vida mais equilibrada e satisfatória.</h2>
            </div>
            <div class="alinhamento">
                <div>
                    <h1>Formação:</h1>
                <div className="capsula"><h1>Psicologo</h1></div>
                </div>
                <div>
                    <h1>Abordagem terapêutica:</h1>
                <div className="capsula"><h1>Psicoterapia Cognitivo-Comportamental</h1></div>
                </div>
                <h1>Especialidade:</h1>
                <div className="aling">
                    <div className="capsula"><h1> Ansiedade</h1></div><div className="capsula"><h1>Depressão</h1></div><div className="capsula"><h1>Transtorno de Ansiedade Generalizada (TAG)</h1></div><div className="capsula"><h1>Transtorno de Pânico</h1></div><div className="capsula"><h1>Fobia Social</h1></div><div className="capsula"><h1> Estresse Pós-Traumático</h1></div><div className="capsula"><h1>Trans. obsessivo-Compulsivo</h1></div>
                </div>
                <div>
                    <h1>Faixa etária:</h1>
                    <div className="capsula"><h1>Adultos e Adolescentes</h1></div>
                </div>
                <div>
                    <h1>Localidade de atuação:</h1>
                <div className="capsula"><h1> Fortaleza, Ceará, Brasil</h1></div>
                </div>
                <div>
                    <h1>tempo de atuação:</h1>
                    <div className="capsula"><h1>10 anos</h1></div>
                </div>
            </div>
        </section>
    </main>
    </div>
    )
}

export default Profi;