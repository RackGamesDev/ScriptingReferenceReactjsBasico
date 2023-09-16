import React, {Component} from "react";
import PropTypes from "prop-types";//haciendo npm i -S prop-types

export default function Propiedades(props){//otra manera sencilla de hacer el jsx
    return(
        <div>
            <h1>propi {props.porDefecto}</h1>
            <h2>{props.otraVariable}</h2>
        </div>
    );
}

Propiedades.defaultProps = {//se ponen propiedades por defecto, para el caso en el que no se especifiquen
    porDefecto: "aa"
}

//haciendo npm i -S prop-types
Propiedades.propTypes = {//sirve para obligar a que las propiedades sean de un tipo especifico (PropTypes.tipo.(obligatoria?))
    otraVariable: PropTypes.number.isRequired
}