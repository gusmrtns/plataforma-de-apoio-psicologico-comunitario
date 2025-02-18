import "../styles/login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <form>
          <div className="form-group">
            <label htmlFor="email">Usuário/e-mail:</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Entrar</button>
        </form>
        <p>Ainda não tem conta? <a href="#">Faça seu cadastro!</a></p>
        <div className="links">
          <a href="#">Preciso de ajuda</a> | <a href="#">Esqueci a senha</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
