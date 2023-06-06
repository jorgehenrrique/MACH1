import { useState, useEffect } from 'react';
import './MyComponent.css';
import { NavLink } from 'react-router-dom';

export default function MyComponent() {
  const [data, setData] = useState(null); // Lista
  const [erro, setErro] = useState(null); // Erro

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const jsonData = await response.json();

        setTimeout(() => { // adicionando mais atrasa de 1s
          setData(jsonData); // passando lista para a variavel de estado
        }, 300);
      } catch (error) {
        console.log('Erro ao buscar os dados:', error);
        setErro('Erro ao buscar os dados'); // Exibe esse erro
      }
    };

    fetchData();

    // Será executada ao desmontar o componente
    return () => {
      console.log('Finalizado');
      setData(null); // Limpa a lista
      setErro(null); // Limpa o erro
    };
  }, []); // Será executado apenas uma vez, ao montar o componente

  return (
    <div>
      {data ? (
        <ul>{data.map(item =>
          (<li key={item.id}>{item.title} <NavLink state={item} to={`/frutas/${item.id}`}>FRUTA</NavLink></li>))}</ul>)
        : (<span className="loader"></span>)}
      {erro &&
        <p>{erro}</p>}
    </div>
  );
}