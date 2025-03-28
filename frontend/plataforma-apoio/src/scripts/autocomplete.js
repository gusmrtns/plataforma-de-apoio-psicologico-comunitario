/**
 * Filtra uma lista de nomes com base no valor de entrada.
 * @param input O texto digitado pelo usuário.
 * @param lista A lista de itens para buscar.
 * @returns Uma lista filtrada de itens que correspondem ao texto.
 */
export const filtrarSugestoes = (input, lista) => {
    if (!input) {
      return []; // Retorna uma lista vazia se o input estiver vazio
    }
    return lista.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
  };
  