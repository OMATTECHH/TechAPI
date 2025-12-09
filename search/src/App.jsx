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
      <BrowserRouter>
         <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/busca' element={<Busca/>}/>
              <Route path='/busca/:id' element={<Detalhes/>}/>
              <Route path='/busca/:id/end' element={<End/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
