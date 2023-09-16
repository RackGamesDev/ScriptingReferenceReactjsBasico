import React, { useState } from 'react';//no se importa component, se importa el hook, en este caso useState

export default function ContadorHooks(props){//los hooks se usan con funciones sin clases
    const [contador, setContador] = useState(0);//crea el componente(contador) y la funcion que cambia su estado(setContador) y el valor inicial(0)

    const sumar = () => setContador(contador + 1);//con el boton se llama a esta funcion, hace un setstate y la propiedad que cambia es contador
    const restar = () => setContador(contador - 1);
    return(
        <>
            <h2>useState</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <h3>{props.titulo} {contador}</h3>{/*se puede usar la variable del hook sin el this*/}
        </>
    );
}

ContadorHooks.defaultProps = {//las default props funcionan normal
    titulo: "asdfasdf"
}