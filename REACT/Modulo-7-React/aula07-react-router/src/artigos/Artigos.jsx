import React from 'react';
import './Artigo.css';

export default function ArtigoPreview(props) {
  const artigos = ['listras', 'arvore', 'animais'];

  function handleClick() {
    console.log('fazer algo');
  }

  return (
    <div className="card">
      <img src={props.img} />
      <small>{props.tipo}</small>
      <h3>{props.nome}</h3>
      <p>{props.conteudo}</p>

      <i onClick={handleClick}>Saiba Mais</i>
    </div>
  );
}
