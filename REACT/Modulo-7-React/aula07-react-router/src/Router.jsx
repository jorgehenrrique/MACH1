import { Route, Routes } from "react-router-dom";
import ArtigoPreview from './components/Artigos';
import Inesistente from './components/Inesistente';
import Animais from './components/artigos/Animais';

function Router() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path='artigos' element={<ArtigoPreview />} />
      <Route path='' element={<Animais />} />
      <Route path="*" element={<Inesistente />} />
    </Routes>
  );
}

export default Router;