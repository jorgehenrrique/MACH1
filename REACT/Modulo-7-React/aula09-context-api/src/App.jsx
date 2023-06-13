import { useState } from 'react';
import './App.css';
import Context from './Context';
import Produto from './Components/Produto';
import Button from './Components/UpdateBtn';

function App() {
  const [produto, setProduto] = useState({
    nome: '',
    preco: 0,
    descricao: 'sem descricao'
  });

  return (
    <Context.Provider value={{ produto, setProduto }}>
      <div>
        <h1>Produto</h1>
        <Produto />
        <Button />
      </div>
    </Context.Provider>
  )
}

export default App
