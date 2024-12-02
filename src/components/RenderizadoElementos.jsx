import React, {Component} from "react";
import data from "./helpers/data.json";

function ElementoLista(props){
    return(
        <li>
            <p>nombre {props.el.name}</p>
        </li>
    );
}

export default class RenderizadoElementos extends Component {
    constructor(props){
        super(props);
        this.state = {
             cosas: ["a", "b", "c", "d"]
        }
    }
    render(){
        return(
            <div>
                <h2>rendel</h2>
                <ol>
                    {
                        this.state.cosas.map((el) => (<li key={el}>{el}</li>))
                    }
                    {/*Por cada elemento de un array genera un elemento*/}
                </ol>
                <h2>otra lista</h2>
                <ul>
                    {
                        data.frameworks.map((el, index) => (<ElementoLista key={index} el={el}/>))
                    }
                </ul>
            </div>
        );
    }
}
