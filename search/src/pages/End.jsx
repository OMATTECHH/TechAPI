import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../Hooks/useFetch';
import { Link } from "react-router-dom";

const End = () => {

    const {id} = useParams()

    const url = `http://localhost:3006/users/${id}`;

    const{data: pessoa} = useFetch(url)

    return (
        <>
            <h1 className='text-4xl font-bold text-center'>Parabens: {pessoa.name}</h1>
            <div className='flex justify-center mt-5'><div className='animate-bounce'><Link to="/" className='bg-neutral-900/70 p-3 rounded-2xl font-bold'>Voltar</Link></div></div>
            
        </>
    )
}

export default End