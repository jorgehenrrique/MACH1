import { listaArtigos } from '../App';
import Breadcrumb from '../components/Breadcrumb';

export default function Arvore(props) {

  return (
    <div>
      <Breadcrumb />
      <div className="card cart-container">
        <img src={listaArtigos[1].img} />
        <small>{listaArtigos[1].tipo}</small>
        <h3>{listaArtigos[1].nome}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quo provident deserunt tempore, corrupti rem placeat enim velit officiis molestias ab laborum consequuntur. Vel labore dolor vitae sint.</p>
      </div>
    </div>
  );
}