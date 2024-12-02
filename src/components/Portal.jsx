import React from 'react';
import ReactDOM from 'react-dom';//Necesario para los portales

const Portal = (props) => {

    return ReactDOM.createPortal(//Asi el contenido se pondra en otra etiqueta html que no sea la root
        <>
            <h4>fuera</h4>
        </>,
        document.getElementById("secundario")//Se pasa el elemento al que se va a poner
    );
}

export default Portal;
