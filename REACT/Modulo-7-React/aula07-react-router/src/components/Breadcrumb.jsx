import './Breadcrumb.css';
import { useLocation } from 'react-router-dom';

export default function Breadcrumb() {
  const data = useLocation();

  return (
    <div className="caminho">
      {data.pathname}
    </div>
  );
}
