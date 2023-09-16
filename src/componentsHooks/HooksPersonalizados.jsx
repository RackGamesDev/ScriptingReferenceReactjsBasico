import React from 'react';
import {useFetch} from "./Hooks/useFetch.jsx";//importar el hook personalizado de la carpeta Hooks

export default function HooksPersonalizados(props){
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let {data, isPending, error} = useFetch(url);//sacando todas las cosas del hook
    return(
        <>
            <h2>per</h2>
            <p>{JSON.stringify(data.count)}</p>{/*lo que devuelva el hook ya esta listo para usar incluso si es asincrono*/}
        </>
    );
}