import React, { useState, useEffect } from 'react';//tambien se usa useeffect

export default function ScrollHooks(props){
    const [scrollY, setScrollY] = useState(0);

    useEffect(()=>{
        //aqui seria el codigo de cuando se monta el componente, tantas veces como se renderice

        const detectarScroll = () => {
            setScrollY(window.pageYOffset);//se declara una funcion al montar el componente que cambia el estado de scrollY
        }
        window.addEventListener("scroll", detectarScroll);
        return()=>{
            //esto se ejecuta cuando se desmonte el componente
            window.removeEventListener("scroll", detectarScroll);
        }
    }, [scrollY]);//si se especifica este parametro, el useEffect solo se ejecutara cuando cambie esa variable (y al inicio)

    return(
        <>
            <h2>ciclo</h2>
            <p>scrolly {scrollY}</p>
        </>
    );
}