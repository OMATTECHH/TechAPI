import React from 'react'
import { Link } from "react-router-dom";

const Main = () => {
  // aqui criamos um componente, mas imoprtaremos no index de Home para organização;

  // colocamos um h1 com tailwind

  // duas div para usar flex, com cetralizamento do Link

  // // criamos um caminho com react-router, onde leva para a variavel /busca que no App foi designada com arquivo Busca
  return (
    <>
        <h1 className='text-4xl uppercase font-bold mt-5 text-center'>Busca por Clientes</h1>
        <div className='flex justify-center'>
          <div className='animate-bounce mt-5'>
              <Link to="/busca" className='bg-neutral-900/70 p-3 rounded-2xl'>Entrar</Link>
          </div>
        </div>
        
    </>
  )
}

export default Main