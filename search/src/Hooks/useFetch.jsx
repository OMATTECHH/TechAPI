import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [msg, setMsg] = useState("Carregando...");

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetch(url);
                const json = await res.json();

                setData(json);

                if (loading) {
                    setMsg("Usuarios");
                    setLoading(false);
                }
            } catch (error) {
                setMsg("Deu erro: " + error);
            }
        }

        setTimeout(() => {
            loadData();
        }, 2000);

        const interval = setInterval(() => {
            loadData();
        }, 1000);

        return () => clearInterval(interval);
    }, [url, loading]);

    return { data, setData, msg, loading };
}