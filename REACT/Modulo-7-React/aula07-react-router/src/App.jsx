import { useState } from 'react';
import ArtigoPreview from './artigos/Artigos';
import Router from './Router';
import './App.css';
import { NavLink, Routes } from 'react-router-dom';
import Breadcrumb from './components/Breadcrumb';

export const listaArtigos = [
  {
    nome: 'Listras',
    img: 'https://i0.wp.com/techwek.com/wp-content/uploads/2020/12/foto-1.jpg?w=600&ssl=1',
    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    tipo: 'Urbano'
  },
  {
    nome: 'Arvore',
    img: 'https://i0.wp.com/techwek.com/wp-content/uploads/2020/12/foto-aleatoria-esquisita.jpg?w=500&ssl=1',
    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae.',
    tipo: 'Selvagem'
  },
  {
    nome: 'Animais',
    img: 'https://i0.wp.com/techwek.com/wp-content/uploads/2020/12/totalmente-aleatoria..jpg?w=608&ssl=1',
    conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, assumenda!',
    tipo: 'Natureza'
  }
];

function App() {

  return (
    <>
      <Router />
    </>
  )
}

export default App;
