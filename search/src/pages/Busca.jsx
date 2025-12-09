import React, { useState } from 'react'
import { useFetch } from "../Hooks/useFetch";
import { Link } from 'react-router-dom';

const Busca = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const url = "http://localhost:3006/users";

    const {data: usuario, setData: setUser, msg, loading} = useFetch(url)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const add = {
            name, email
        };

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(add)
        });

        const load  = res.json();

        setUser((prev) => [...prev, load])

        setName("")
        setEmail("")
    };
    
    return (
        <>
            {loading ? (
                <div>
                    <h1 className='text-4xl uppercase font-bold text-center mb-5'>{msg}</h1>
                </div>
            ) : (
                <div className='flex flex-col items-center'>
                    <h1 className='text-4xl uppercase font-bold text-center mb-5'>{msg}</h1>
                    <ul className='bg-neutral-600 p-3 rounded-2xl w-2xl flex flex-col gap-2 h-fit'>
                        {usuario.map((u) => (
                            <li key={u.id}><strong>{u.name}</strong> - {u.email} - {(
                                <Link to={`/busca/${u.id}`}><strong className='bg-neutral-900/80 py-1 p-2 rounded-2xl'>Detalhes</strong></Link>
                            )}</li>
                        ))}
                    </ul>
                </div>
            )}

            <div className='flex justify-center'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2 items-center mt-5 bg-neutral-700 rounded-2xl w-60 h-48'>
                    <label className='flex flex-col'>
                        <span className='font-bold '>Nome:</span>
                        <input type="text" name="nameUser" id="nameUserId" onChange={(e) => setName(e.target.value)} placeholder='Digite seu nome' required minLength={2} className='bg-neutral-900/80 p-2 rounded-2xl'/>
                    </label>

                    <label className='flex flex-col'>
                        <span className='font-bold'>Email:</span>
                        <input type="email" name="emailUser" id="emailUserId" onChange={(e) => setEmail(e.target.value)} placeholder='Digite seu email' required className='bg-neutral-900/80 p-2 rounded-2xl'/>
                    </label>

                    <div>
                        <button type='submit' className='bg-neutral-900/80 p-2 rounded-2xl w-28'>Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Busca