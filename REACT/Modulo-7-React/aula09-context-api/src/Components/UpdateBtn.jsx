import { useContext } from 'react'
import Context from '../Context'

export default function Button() {
  const { setProduto } = useContext(Context);

  const updateProduto = () => {
    setProduto({
      nome: 'Produto-01',
      preco: 10.00,
      descricao: 'Produto Prototipo'
    })
  }
  return (
    <button type='button' onClick={updateProduto}>Atualizar</button>
  );
}