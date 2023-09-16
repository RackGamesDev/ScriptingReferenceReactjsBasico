import React, {Component} from "react";

export class EventosES6 extends Component {
    constructor(props){
        super(props);
        this.state = {
             contador: 0
        }
        this.sumar = this.sumar.bind(this);//por cada funcion de evento
        this.restar = this.restar.bind(this);
    }
    sumar(e){//e hace referencia al evento
        this.setState({//cambiar el estado
            contador: this.state.contador + 1
        });
    }
    restar(e){
        this.setState({
            contador: this.state.contador - 1
        });
    }
    render(){
        return(
            <div>
                <h2>eventos</h2>
                <p>{this.state.contador}</p>
                <nav>
                    <button onClick={this.sumar}>+</button>{/*para hacer los eventos se hace una funcion y se llama a la funcion asi, onClick es un evento pero funcionan todos los de html*/}
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        );
    }
}

//para ecmascript 7 hay otra manera, pero ambas funcionan
export class EventosES7 extends Component {
    state = {//ahora se puede hacer el state talcual
         contador: 0
    }
    sumar = (e) => {//ahora son arrow functions
        this.setState({
            contador: this.state.contador + 1
        });
    }
    restar = (e) => {
        this.setState({
            contador: this.state.contador - 1
        });
    }
    render(){
        return(
            <div>
                <h2>eventos nuevo</h2>
                <p>{this.state.contador}</p>
                <nav>
                    <button onClick={this.sumar}>+</button>{/*para hacer los eventos se hace una funcion y se llama a la funcion asi, onClick es un evento pero funcionan todos los de html*/}
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        );
    }
}


function Boton(props){
    return <button onClick={props.myOnClick}>boton comp</button>//poniendo el evento esta vez si con los props, esta function tambien se podria hacer con ()=>
}
export class MasEventos extends Component{
    evento = (e, parametro) => {
        console.log(e);//evento de react
        console.log(e.nativeEvent);//evento de javascript normal
        console.log(e.target);//etiqueta que genero el evento
        console.log(parametro);
    }
    render(){
        return(
            <div>
                <h2>mas eventos</h2>
                <button onClick={(e) => this.evento(e, "asdfasdf")}>aa</button>{/*se hace asi solo cuando se vallan a pasar mas parametros*/}
                <Boton myOnClick={(e) => this.evento(e, "asdfasdf")}/>{/*en caso de que sea para un componente ya hecho, se hace asi, como prop*/}
            </div>
        );
    }
}