import React, { useState, useEffect } from 'react';

function Pokemon(props){
    return (
        <figure>
            <p>{props.name}</p>
        </figure>
    );
}

export default function AjaxHooks(props){
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const getPokemons = async (url) => {
            let res = await fetch(url);
            let json = await res.json();
            json.results.forEach(async (el) => {
                let res2 = await fetch(el.url);
                let json2 = await res2.json();
                let pokemon = {
                    id: json2.id,
                    name: json2.name
                }
                setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        }
        let url = "https://pokeapi.co/api/v2/pokemon/";
        getPokemons(url);
    }, []);

    return(
        <>
            <h2>peticiones hooks</h2>
            {pokemons.length === 0 ? (<h3>cargando</h3>) : (
                pokemons.map((el) => {
                    <Pokemon key={el.id} name={el.avatar}/>
                })
            )}
        </>
    );
}