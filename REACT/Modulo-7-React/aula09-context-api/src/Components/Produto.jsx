import { useContext } from 'react';
import Context from '../Context';

export default function Produto() {
  const { produto } = useContext(Context);

  return (
    <div>
      <h4>Nome: {produto.nome}</h4>
      <p>Proço: {produto.preco}</p>
      <p>Descrição: {produto.descricao}</p>
    </div>
  )
}