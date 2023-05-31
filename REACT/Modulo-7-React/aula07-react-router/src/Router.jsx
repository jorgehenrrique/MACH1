import { Route, Routes } from "react-router-dom";
import ArtigoPreview from './artigos/Artigos';
import Inesistente from './artigos/Inesistente';
import Animais from './artigos/Animais';
import Listras from './artigos/Listras';
import Arvore from './artigos/Arvore';

function Router() {
  return (
    <Routes>
      <Route path="" element={<ArtigoPreview />} />
      <Route path='Listras' element={<Listras />} />
      <Route path='Arvore' element={<Arvore />} />
      <Route path='Animais' element={<Animais />} />
      <Route path="*" element={<Inesistente />} />
    </Routes>
  );
}

export default Router;