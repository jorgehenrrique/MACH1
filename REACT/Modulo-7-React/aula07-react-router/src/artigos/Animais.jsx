import { listaArtigos } from '../App';
import Breadcrumb from '../components/Breadcrumb';

export default function Animais(props) {

  return (
    <div>
      <Breadcrumb />
      <div className="card cart-container">
        <img src={listaArtigos[2].img} />
        <small>{listaArtigos[2].tipo}</small>
        <h3>{listaArtigos[2].nome}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque similique voluptates, aut, ipsum deleniti eaque sapiente velit recusandae ipsam minus dolorem? Dolores pariatur porro provident quaerat ex modi iure suscipit.</p>
      </div>
    </div>
  );
}