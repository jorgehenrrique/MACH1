import React from 'react';
import './Artigo.css';
import { NavLink, Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Listras from './Listras';
import Arvore from './Arvore';
import Animais from './Animais';
import { listaArtigos } from '../App';

export default function ArtigoPreview(props) {

  return (
    <div>
      <h2>Página de Artigos</h2>
      <Breadcrumb />
      {listaArtigos.map((artigo, index) => (
        <div className="card" key={index}>
          <img src={artigo.img} />
          <small>{artigo.tipo}</small>
          <h3>{artigo.nome}</h3>
          <p>{artigo.conteudo}</p>

          <i><NavLink to={artigo.nome}>Saiba Mais</NavLink> </i>
        </div>
      ))}
    </div>
  );
}
