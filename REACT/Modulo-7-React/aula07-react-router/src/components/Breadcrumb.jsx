import './Breadcrumb.css';

// export default function Breadcrumb() {
//   const data = useLocation();

//   return (
//     <div className="caminho">
//       {data.pathname}
//     </div>
//   );
// }

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Breadcrumb() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleArtigosClick = () => {
    navigate('/artigos');
  };

  return (
    <nav className="caminho">
      <Link to="/">Artigos{location.pathname}</Link>
      {location.pathname.startsWith('/artigos') && (
        <>
          <span> / </span>
          <span onClick={handleArtigosClick}>Artigos</span>
        </>
      )}
    </nav>
  );
}
