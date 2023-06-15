import { useContext, useState } from 'react';
import Context from './Context';

export default function ExibeLista() {
  const { state, dispatch } = useContext(Context);

  const [texto, setTexto] = useState('');

  return (
    <>
      <input type="text" placeholder='Adicionar Produto'
        value={texto}
        onChange={(e) => setTexto(e.target.value)} />
      <button onClick={() => dispatch({ type: 'ADICIONAR', nome: texto })}>ADICIONAR</button >
      <ul>
        {state.map((produto) => {
          return (
            <div key={produto.id}>
              <li>{produto.produto}-{produto.id}</li>
              <button onClick={() => dispatch({ type: 'REMOVER', id: produto.id })}>REMOVER</button>
            </div>
          )
        })}
      </ul >
    </>
  );
}