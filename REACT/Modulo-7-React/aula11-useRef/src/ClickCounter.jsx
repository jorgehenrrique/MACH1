import { useCallback, useState } from 'react';

export default function ClickCounter() {
  const [counter, setCounter] = useState(0);

  const clickCounter = useCallback(() => {
    setCounter(counter + 1);

    return counter;
  }, [counter]);

  return (
    <>
      <div className="container">
        <h2>Aplicando useCallback</h2>

        <button onClick={clickCounter}>+</button>
        <label>Contador: {counter}</label>
      </div>
    </>
  );
}