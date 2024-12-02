import React, { Component, useCallback, useState } from 'react';//lo de useCallback no es necesario
import ContadorHijo from "./MemorizacionHijo.jsx";

export default function Memorizacion(props){
    const [contador, setContador] = useState(0);
    //const sumar = () => setContador(contador + 1);
    const sumar = useCallback(() => {//Similar al useEffect pero rerenderiza los componentes memo en cache, ese componente tiene que estar involucrado con la variable (?)
        setContador(contador + 1);
    }, [contador]);
    const restar = () => setContador(contador - 1);
    return(
        <>
            <h3>contador</h3>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <h4>{contador}</h4>
            <ContadorHijo />{/*De normal este elemento se re-renderizaria cada vez que cambie contador, mero al usar memo() solo se renderiza y calcula la primera vez*/}
        </>
    );
}

