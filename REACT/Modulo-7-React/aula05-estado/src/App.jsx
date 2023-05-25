import { useState } from 'react';
import ColorChanger from './assets/ColorChanger';
import './App.css';

function App() {
  const [remove, setRemove] = useState(false);

  const handleRemove = () => {
    if (remove) return setRemove(false);
    if (!remove) return setRemove(true);
  };

  return (
    <div>
      {!remove && (
        <div>
          <h1>Exercício de Mudança de Cor</h1>
          <ColorChanger />
        </div>
      )}
      <h4>{remove ? 'Adicionar' : 'Remover'} ColorChanger</h4>
      <button onClick={handleRemove}>{remove ? 'Adicionar' : 'Remover'}</button>
    </div>
  );

}

export default App;

// Extra challenger:
// Crie um botão no App.js que quando ser clicado deve remover o componente ColorChanger da aplicação. Ao ser executada esta ação o componente ColorChanger deve disparar um alert avisando que o mesmo está sendo removido da tela.
