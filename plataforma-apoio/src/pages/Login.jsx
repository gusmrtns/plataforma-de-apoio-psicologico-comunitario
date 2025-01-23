

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          E-mail:
          <input type="email" />
        </label>
        <label>
          Senha:
          <input type="password" />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
