import React, {Component} from "react";
import PropTypes from "prop-types";//Haciendo npm i -S prop-types

export default function Propiedades(props){//Otra manera sencilla de hacer el jsx
    return(
        <div>
            <h1>propi {props.porDefecto}</h1>
            <h2>{props.otraVariable}</h2>
        </div>
    );
}

Propiedades.defaultProps = {//Se ponen propiedades por defecto, para el caso en el que no se especifiquen
    porDefecto: "aa"
}

//Haciendo npm i -S prop-types
Propiedades.propTypes = {//Sirve para obligar a que las propiedades sean de un tipo especifico (PropTypes.tipo.(obligatoria?))
    otraVariable: PropTypes.number.isRequired
}
