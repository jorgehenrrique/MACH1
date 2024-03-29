import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Frutas from './components/Frutas.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/frutas/:id' element={<Frutas />} />
    </Routes>
  </BrowserRouter >,
)
