import React, { useState, useEffect } from 'react';
import './ColorChanger.css';

const ColorChanger = () => {
  // TODO: Declare uma constante de estado chamada "isBlue" e uma função para atualizá-la
  const [isBlue, setBlue] = useState(false);

  function ColorChange() {
    if (isBlue) return setBlue(false);
    if (!isBlue) return setBlue(true);
  }

  // TODO: Declare um efeito que será executado apenas na montagem do componente
  // Imprima "Componente montado" no console
  useEffect(() => {
    console.log('Componente montado');

    // Retorne uma função de limpeza que será executada na desmontagem do componente
    // Imprima "Componente desmontado" no console
    return () => {
      console.log('Componente desmontado')
      alert('O componente ColorChanger está sendo removido da tela.');
    };
  }, []);

  // TODO: Declare um efeito que será executado sempre que "isBlue" for alterado
  // Imprima "Componente atualizado" no console
  useEffect(() => {
    console.log('Componente atualizado para: ', isBlue);

    // Implemente uma lógica condicional para alterar a cor de fundo do corpo do documento entre vermelho e azul
    if (isBlue) {
      document.body.className = ('blue');
      // document.body.setAttribute('class', 'blue'); // alternativa
    } else {
      document.body.className = ('red');
      // document.body.setAttribute('class', 'red'); // alternativa
    }

    // Retorne uma função de limpeza que será executada antes do próximo efeito
    // Imprima "Efeito anterior limpo" no console
    return () => console.log('Efeito' + `${isBlue ? ' azul ' : ' vermelho '}` + 'anterior limpo');
  }, [isBlue]);


  // TODO: Implemente uma função de manipulador de clique para o botão
  // Esta função deve atualizar o estado de "isBlue" para o valor oposto atual

  // TODO: Renderize um botão que, ao ser clicado, altera a cor de fundo conforme o estado de "isBlue"
  return (
    <div>
      {/* TODO: Adicione o botão aqui */}
      <button onClick={ColorChange}>Color</button>
    </div>
  );
};

export default ColorChanger;