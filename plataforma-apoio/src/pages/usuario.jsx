import "../styles/usuario.css";

const Usuario = () => {
    return (
    <body>
    <main class="divisor_cont">
    <section class="container_1">
        <div class="quadro_1">
            <div class="circulo">
                <p>imagem do perfil do usuário</p>
            </div>
            <h2>Nome de usuário</h2>
            <P>N° de consultas:</P>
            <div class="circulo_menor">
                <p>0</p>
            </div>
        </div>
        
        <div class="grupo_but">
            <button class="botao_cima"><h1>Notificações</h1></button>
            <button class="botao_cent"><h1>Consultas marcadas</h1></button>
            <button class="botao_baixo"><h1>Histórico de consultas</h1></button>
        </div>
        <div>
            <button class="retornar"><h1>Página inicial</h1></button>
        </div>
    </section>

    <section class="container_2">
            <div class="quadro_2">
               <div class="quad_top"><h2>Dados do usuário</h2></div>
                <div class="separar">
                    <h1>Nome completo: Luís Fernando da Silva</h1>
                    <h1>CPF: 082....07</h1>
                    <h1>Data de nascimento: 23/05/2005</h1>
                    <h1>Gênero: masculino</h1>
                    <h1>nacionalidade: Brasileiro</h1>
                </div>
            </div>
            <div class="quadro_3">
                <div class="quad_top2"><h2>Dados de endereço</h2></div>
                <div class="separar">
                    <h1>Endereço: Rua Pedro Coelho, 154, Serrinha</h1>
                    <h1>CEP: 59215000</h1>
                    <h1>Cidade: Fortaleza</h1>
                    <h1>Estado: Ceará</h1>
                </div>
            </div>
            <div class="quadro_4">
                <div class="quad_top3"><h2>Informações de contato</h2></div>
                <div class="separar">
                    <h1>E-mail: luisfernando@gmail.com</h1>
                    <div class="tell">
                        <h1>Telefone:</h1>
                        <div>
                            <h1>(85) 96371-2523</h1>
                            <h1>(85) 98470-3518</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
            <button class="edit"><h1>Editar perfil</h1></button>
    </section>
    </main>
    </body>
    )
    
}