import { listaArtigos } from '../App';
import Breadcrumb from '../components/Breadcrumb';

export default function Listras(props) {

  return (
    <div>
      <Breadcrumb />
      <div className="card cart-container">
        <img src={listaArtigos[0].img} />
        <small>{listaArtigos[0].tipo}</small>
        <h3>{listaArtigos[0].nome}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non placeat provident dolor aspernatur amet dicta accusamus doloremque beatae molestiae reiciendis!</p>
      </div>
    </div>
  );
}