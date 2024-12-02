import React from 'react';
import {useFetch} from "./Hooks/useFetch.jsx";//Importar el hook personalizado de la carpeta Hooks

export default function HooksPersonalizados(props){
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let {data, isPending, error} = useFetch(url);//Sacando todas las cosas del hook
    return(
        <>
            <h2>per</h2>
            <p>{JSON.stringify(data.count)}</p>{/*Lo que devuelva el hook ya esta listo para usar incluso si es asincrono*/}
        </>
    );
}
