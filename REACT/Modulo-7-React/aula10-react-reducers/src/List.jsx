/* eslint-disable react-refresh/only-export-components */
export const initialStateProdutos = [];

// O state, assume o lugar da initialStateProdutos
// action é o parametro enviado pelo dispatch {type: ''...}
function ProductList(state, action) {
  switch (action.type) {
    case 'ADICIONAR': {
      const maxId = state.reduce((max, product) => (product.id > max ? product.id : max), 0) + 1;
      return [
        ...state,
        {
          id: maxId,
          produto: action.nome
        }
      ];
    }
    case 'REMOVER': {
      return state.filter((t) => t.id !== action.id);
    }
    default:
  }
}

export default ProductList;