import './App.css';
import useCounter from './components/useCounter';
import useToggle from './components/useToggle';

function App() {
  const { count, increment, decrement } = useCounter();
  const { toggle, alternateToggle } = useToggle();

  return (
    <>
      <div className="container">
        <h3>useCounter</h3>

        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <label>Counter: {count}</label>
      </div>

      <div className={`container ${toggle ? 'azul' : 'vermelho'}`}>
        <h3>useToggle</h3>
        <button onClick={alternateToggle}>Azul/Vermelho</button>
      </div>
    </>
  )
}

export default App;
