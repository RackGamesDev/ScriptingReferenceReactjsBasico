import React, {Component} from "react";

function ComponenteFuncion(props){//tambien se pueden hacer asi, para que tengan logica, tambien se podria hacer con el => 
    let variable = 1 + 1;//codigo normal javascript
    if(variable == 2){
        variable++;
    }

    //una vez terminada la logica se devuelven las etiquetas con las propiedades y demas
    return (<h2>aaa {props.propiedad} {variable}</h2>);
}

export default ComponenteFuncion;