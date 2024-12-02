import React, { useState, useEffect } from 'react';//Tambien se usa useeffect

export default function ScrollHooks(props){
    const [scrollY, setScrollY] = useState(0);

    useEffect(()=>{
        //Aqui seria el codigo de cuando se monta el componente, tantas veces como se renderice

        const detectarScroll = () => {
            setScrollY(window.pageYOffset);//Se declara una funcion al montar el componente que cambia el estado de scrollY
        }
        window.addEventListener("scroll", detectarScroll);
        return()=>{
            //Esto se ejecuta cuando se desmonte el componente
            window.removeEventListener("scroll", detectarScroll);
        }
    }, [scrollY]);//Si se especifica este parametro, el useEffect solo se ejecutara cuando cambie esa variable (y al inicio)

    return(
        <>
            <h2>ciclo</h2>
            <p>scrolly {scrollY}</p>
        </>
    );
}
