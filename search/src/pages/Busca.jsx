import React, { useState } from 'react'
import { useFetch } from "../Hooks/useFetch";
import { Link } from 'react-router-dom';

const Busca = () => {

    // recebe o nome do input
    const [name, setName] = useState("")

    // recebe o email do input
    const [email, setEmail] = useState("")

    // url da nossa API, onde estaos os usuarios
    const url = "http://localhost:3006/users";

    // aqui destructaramos aquiilo que retornamos la no hook
    // chamamos o customHook e passa a url como parametro
    const {data: usuario, setData: setUser, msg, loading} = useFetch(url)

    const handleSubmit = async (e) => {
        // permite nao ter o comportamento padrrao do form
        e.preventDefault();

        // selecionamos o name e email do input, quando ha o mesmo nome do json com input nao precisamos renomear
        const add = {
            name, email
        };

        // receber
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(add)
        });

        // trasformar
        const load  = res.json();

        // aqui pegamos o valor autal e ja colocamos dentro da lista de usuarios
        setUser((prev) => [...prev, load])

        //zeramo = limpamos
        setName("")
        setEmail("")
    };
    
    // abaixo temos um Link com  o  caminho com /busca/${u.id}^ quado a url for busca e tiver o id tal mostre a paggina detalhes
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