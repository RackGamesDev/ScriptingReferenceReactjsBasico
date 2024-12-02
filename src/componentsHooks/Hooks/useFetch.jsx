//Cada hook personalizado va en un archivo distinto, normalmente en una carpeta aparte y tiene que empezar por "use"
import {useState, useEffect} from "react";

export const useFetch = (url) => {//Poniendo la funcion y todos los parametros que podria recibir
    const [data, setData] = useState(null);//Todos los datos que podria devolver
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {//Procesamiento de datos
        const getData = async (url) => {
            try{
                let res = await fetch(url);
                if(!res.ok){
                    throw{err:true, status:res.status, statusText: !res.statusText ? "error" : res.statusText}
                }
                let data = await res.json();
                setIsPending(false);
                setData(data);
                setError({err: false});
            } catch (err){
                console.log(err);
                setIsPending(false);
                setError(err);
            }
        }
        getData(url);
    }, [url]);

    return {data, isPending, error}//Devolver los datos procesados
}
//En este caso es un hook para hacer peticiones get con una url, luego devuelve los datos
