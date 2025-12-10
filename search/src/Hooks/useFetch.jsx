import { useEffect, useState } from "react";

export function useFetch(url) {
    // receber
    const [data, setData] = useState([]);

    // estado
    const [loading, setLoading] = useState(true);

    // mensagem
    const [msg, setMsg] = useState("Carregando...");


    // efeito que possa demorar
    useEffect(() => {
        async function loadData() {
            // tratamento de erro
            try {
                // buscarr
                const res = await fetch(url);

                // mudar
                const json = await res.json();

                    // passar
                    setData(json);

                    // mudar msg
                    setMsg("Usuarios");

                    // mudas estado
                    setLoading(false);
            } catch (error) {
                // pega o errro
                setMsg("Deu erro: " + error);
            }
        }

        // demora um tempo para rodar a função senfddoa sism conseguimos ainda eixar o Ccarregando...; sem isso aqui, o Carrregano Mal aparece, e seria algo ruim pro usuario, exxperiencia
        setTimeout(() => {
            loadData();
        }, 2000);

        // aqui fazemos que ddurante 1s, a função roa novamanete para analisar qu3em saui e quem entrou
        const interval = setInterval(() => {
            loadData();
        }, 1000);

        // retornamos quano ele terminar um clear para nao ficar repetindo infinitamente
        return () => clearInterval(interval);
    }, [url]);

    // retorna o que vamos utilizar, entao sempre retorne tudo para nao ter mais trabalho depois
    return { data, setData, msg, loading };
}