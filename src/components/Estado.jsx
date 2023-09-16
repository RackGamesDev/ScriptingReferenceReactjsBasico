import React, {Component} from "react";



export default class Estado extends Component {


    constructor(props){
        super(props);
        this.state = {//generar objeto state con sus propiedades
            contador: 0
        }

        //setInterval(() => {
            this.setState({//asi se cambian las propiedades del estado, entonces se vuelve a renderizar
                contador: this.state.contador + 1
            });
        //}, 1000);
    }
    render(){
        return(
            <div>
                <h2>{this.state.contador}</h2>{/*ahora con el estado creado se accede a las propiedades asi*/}
            </div>
            
        );
    }
}