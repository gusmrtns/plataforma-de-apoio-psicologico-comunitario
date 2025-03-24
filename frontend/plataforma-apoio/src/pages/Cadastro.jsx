

const Cadastro = () => {
  return (
    <div>
      <h1>Cadastro</h1>
      <form>
        <label>
          Nome:
          <input type="text" />
        </label>
        <label>
          E-mail:
          <input type="email" />
        </label>
        <label>
          Senha:
          <input type="password" />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
