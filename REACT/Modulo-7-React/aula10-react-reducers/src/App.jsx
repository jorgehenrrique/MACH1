import { useReducer } from 'react';
import './App.css';
import Context from './Context';
import ProductList, { initialStateProdutos } from './List';
import ExibeLista from '../ProductList';

function App() {
  const [state, dispatch] = useReducer(ProductList, initialStateProdutos)

  return (
    <Context.Provider value={{ state, dispatch }}>
      <h1>Lista</h1>
      <ExibeLista />
    </Context.Provider>
  )
}

export default App;
