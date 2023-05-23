import { useState } from 'react'
import UserCard from './UserCard.jsx';
import './App.css'

function App(props) {
  const user = {
    nome: 'Jorge',
    idade: 30,
    cidade: 'Ny',
    isPremium: true
  }

  return (
    <>
      <UserCard user={user} />
    </>
  )
}

export default App
