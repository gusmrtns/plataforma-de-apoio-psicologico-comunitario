import "../styles/usuario.css";

const Usuario = () => {
    return (
    <div className="user_body">
    <main className="divisor_cont">
    <section className="container_1">
        <div className="quadro_1">
            <div className="circulo">
                <p>imagem do perfil do usuário</p>
            </div>
            <h2>Nome de usuário</h2>
            <p>N° de consultas:</p>
            <div className="circulo_menor">
                <p>0</p>
            </div>
        </div>
        
        <div className="grupo_but">
            <button className="botao_cima"><h1>Notificações</h1></button>
            <button className="botao_cent"><h1>Consultas marcadas</h1></button>
            <button className="botao_baixo"><h1>Histórico de consultas</h1></button>
        </div>
    </section>

    <section className="container_2">
            <div className="quadro_2">
               <div className="quad_top"><h2>Dados do usuário</h2></div>
                <div className="separar">
                    <h1>Nome completo: Luís Fernando da Silva</h1>
                    <h1>CPF: 082....07</h1>
                    <h1>Data de nascimento: 23/05/2005</h1>
                    <h1>Gênero: masculino</h1>
                    <h1>nacionalidade: Brasileiro</h1>
                </div>
            </div>
            <div className="quadro_3">
                <div className="quad_top2"><h2>Dados de endereço</h2></div>
                <div className="separar">
                    <h1>Endereço: Rua Pedro Coelho, 154, Serrinha</h1>
                    <h1>CEP: 59215000</h1>
                    <h1>Cidade: Fortaleza</h1>
                    <h1>Estado: Ceará</h1>
                </div>
            </div>
            <div className="quadro_4">
                <div className="quad_top3"><h2>Informações de contato</h2></div>
                <div className="separar">
                    <h1>E-mail: luisfernando@gmail.com</h1>
                    <div className="tell">
                        <h1>Telefone:</h1>
                        <div>
                            <h1>(85) 96371-2523</h1>
                            <h1>(85) 98470-3518</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
            <button className="edit"><h1>Editar perfil</h1></button>
    </section>
    </main>
    </div>
    )
    
}

export default Usuario;