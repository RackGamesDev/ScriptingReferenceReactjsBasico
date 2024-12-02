import React, {Component} from "react";

export default class Padre extends Component {
    state = {
        contador: 0
    }
    incrementarContador = (e) => {//Esta funcion esta en el componente padre pero la ejecutara el hijo
        this.setState({
            contador: this.state.contador + 1
        });
    }
    render(){
        return(
            <>
                <h2>p</h2>
                <Hijo incrementarContador={this.incrementarContador} mensaje="asdfasdf 1"/>
                <Hijo mensaje="asdfasdf 2"/>
            </>
        );
    }
}

function Hijo(props){
    return(
        <>
            <h2>a {props.mensaje}</h2>
            <button onClick={props.incrementarContador}>asdfa</button>{/*Recibe una funcion como prop, funcion que le pasa el elemento padre y que ejecutaria el elemento hijo*/}
        </>
    );
}
