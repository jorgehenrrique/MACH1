import { useRef, useState } from 'react';


export default function InputCounter() {
  const [count, setCounte] = useState(0);
  const caracteres = useRef();

  const handleChange = () => {
    setCounte(caracteres.current.value.length)
  };

  return (
    <>
      <div className="container">
        <h2>Aplicando useRef</h2>
        <input ref={caracteres} type="text" onChange={handleChange} />
        <label>Caracteres: {count}</label>
      </div>
    </>
  );
}