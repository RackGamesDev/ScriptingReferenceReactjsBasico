import React, { useState, useEffect } from 'react';

function Reloj({hora}){
    return <h3>{hora}</h3>
}

export default function RelojHooks(props){
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        let temporizador;
        if(visible){
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString());
            }, 1000);
        } else {
            clearInterval(temporizador);
        }
        return() => {
            clearInterval(temporizador);
            //destruccion
        }
    }, [visible]);

    return(
        <>
            <h2>reloj</h2>
            {visible && <Reloj hora={hora}/>}
            <button onClick={()=>setVisible(true)}>iniciar</button>
            <button onClick={()=>setVisible(false)}>detener</button>
        </>
    );
}