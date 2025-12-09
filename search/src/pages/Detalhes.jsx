import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../Hooks/useFetch';
import { Link } from "react-router-dom";

const Detalhes = () => {

    const {id} = useParams()

    const url = `http://localhost:3006/users/${id}`;

    const {data: user, msg, loading} = useFetch(url)

    return (
        <>
        <div className='bg-neutral-900/80 p-2 rounded-2xl w-62 mt-5 mx-auto h-48'>
            {loading ? (
                <h1 className='font-bold uppercase text-xl'>{msg}</h1>
            ) : (
                <h1 className='text-2xl mb-3'>Usuario: <strong>{user.name}</strong></h1>
            )}

            <ul >
                <li>{user.email}</li>
            </ul>

            <Link to={`/busca/${id}/end`} className='bg-neutral-600 p-2 rounded-2xl block mt-5'>informações</Link>
        </div>
        </>
    )
}

export default Detalhes