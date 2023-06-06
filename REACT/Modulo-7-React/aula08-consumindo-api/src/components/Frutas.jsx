import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Frutas() {
  const navigate = useNavigate();
  const parans = useParams(); // pega o parametro, link, /:id
  const { id } = parans;

  const location = useLocation();
  const fruta = location.state; // Pega o obj enviado no state do NavLink

  function handleClick() {
    navigate('/'); // voltar ao /home
  }

  return (
    <>
      <h2>Dados da Fruta</h2>
      <p>Titulo: {fruta.title}</p>
      <p>UserID: {fruta.userId}</p>
      <p>id: {id}</p>

      <button onClick={handleClick}>Voltar</button>
    </>

  );
}