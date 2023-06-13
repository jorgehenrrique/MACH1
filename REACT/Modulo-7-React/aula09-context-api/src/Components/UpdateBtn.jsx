import { useContext } from 'react'
import Context from '../Context'

export default function Button() {
  const { produto, setProduto } = useContext(Context);

  const updateProduto = () => {
    if (produto.nome === '') {
      setProduto({
        nome: 'Produto-01',
        preco: 10.00,
        descricao: 'Produto Prototipo'
      });
    } else {
      setProduto({
        nome: '',
        preco: 0.00,
        descricao: 'Sem Produto'
      });
    }

  }
  return (
    <button type='button' onClick={updateProduto}>Atualizar</button>
  );
}