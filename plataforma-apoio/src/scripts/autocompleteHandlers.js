import { filtrarSugestoes } from "./autocomplete";

/**
 * Lida com mudanças no input de texto e atualiza as sugestões.
 * @param {string} valor - O valor atual do input.
 * @param {string[]} lista - A lista de nomes para filtrar.
 * @param {function} setSugestoes - Função para atualizar as sugestões.
 */
export const handleInputChange = (valor, lista, setSugestoes) => {
  const sugestoesFiltradas = filtrarSugestoes(valor, lista);
  setSugestoes(sugestoesFiltradas);
};

/**
 * Lida com o clique em uma sugestão.
 * @param {string} sugestao - O nome selecionado na lista de sugestões.
 * @param {function} setNome - Função para atualizar o valor do input.
 * @param {function} setSugestoes - Função para limpar as sugestões.
 */
export const handleSugestaoClick = (sugestao, setNome, setSugestoes) => {
  setNome(sugestao);
  setSugestoes([]);
};
