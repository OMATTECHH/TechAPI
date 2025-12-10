// CSS
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/layout/Home"
import Busca from "./pages/Busca"
import Detalhes from "./pages/Detalhes"
import End from './pages/End';

function App() {

  return (
    <>
    {/* controlador de rotas, ele evita que recarrregue o site todo*/}
      <BrowserRouter basename='/TechAPI'>
    {/* organizador de caminhos*/}
         <Routes>
    {/* Quando a urrl for alguma coisa*/}
              <Route path='/' element={<Home/>}/>
              <Route path='/busca' element={<Busca/>}/>
              <Route path='/busca/:id' element={<Detalhes/>}/>
              <Route path='/detales/:id/end' element={<End/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
