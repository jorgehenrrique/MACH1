import { useState } from 'react'
import UserCard from './UserCard.jsx';
import './App.css'

function App(props) {
  const user = [{
    nome: 'Jorge',
    idade: 30,
    cidade: 'Ny',
    isPremium: true
  },
  {
    nome: 'Henrique',
    idade: 38,
    cidade: 'RJ',
    isPremium: false
  },
  {
    nome: 'Jones',
    idade: 34,
    cidade: 'SP',
    isPremium: true
  },
  {
    nome: 'Roger',
    idade: 22,
    cidade: 'London',
    isPremium: false
  }];

  return (
    <>
      {user.map((userCard) => (
        <UserCard user={userCard} />
      ))}
    </>
  )
}

export default App;
