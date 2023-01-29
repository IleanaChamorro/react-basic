import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    //controlar datos que vienen
    const [data, setData] = useState(null);
    //controlar si la peticion esta pendiente
    const [isPending, setIsPending] = useState(true)
    //variable de error
    const [error, setError] = useState(null)

    //se ejecuta cuando cambie la url del archivo donde se manda a llamar 
    useEffect(() => {
        const getData = async(url) => {
            try {
                let res = await fetch(url);

                if(!res.ok){
                    throw{
                    err:true,
                    status:res.status, 
                    statusText: !res.statusText ? "Ocurrio un error" : res.statusText
                };
            }
            let data = await res.json();   

            setIsPending(false);
            setData(data);
            setError({err: false});
        } catch (error) {
            setIsPending(true);
            setError(err);
        };
    
        };
        getData(url)
    }, [url]);

    return[data, isPending, error];
};