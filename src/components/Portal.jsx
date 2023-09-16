import React from 'react';
import ReactDOM from 'react-dom';//necesario para los portales

const Portal = (props) => {

    return ReactDOM.createPortal(//asi el contenido se pondra en otra etiqueta html que no sea la root
        <>
            <h4>fuera</h4>
        </>,
        document.getElementById("secundario")//se pasa el elemento al que se va a poner
    );
}

export default Portal;