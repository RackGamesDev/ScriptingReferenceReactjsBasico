import React, {Component} from "react";

class Reloj extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h3>{this.props.hora}</h3>
        );
    }
}

class CicloVida extends Component{
    constructor(props){
        super(props);
        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
        }
        this.temporizador = null;
        //0 en este momento el componente se inicializa pero no esta aun en el dom
    }
    componentDidMount(){
        //1 en este momento el componente ya esta en el dom
    }
    componentDidUpdate(prevProps, prevState){//ambas variables son como estaban las props y state antes de la actualizacion
        //2 en este momento el estado o props cambian
    }
    componentWillUnmount(){
        //3 en este momento seria si el elemento se elimina del dom
    }

    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            });
        }, 1000);
    }
    iniciar = () => {
        this.tictac();
        this.setState({
            visible: true
        });
    }
    detener = () => {
        clearInterval(this.temporizador);
        this.setState({
            visible: false
        });
    }

    render(){
        //4 en este momento el componente se dibuja/redibuja en el dom
        return(
            <>
                <h3>ciclo</h3>
                {this.state.visible && <Reloj hora={this.state.hora}/>}
                <button onClick={this.iniciar}>iniciar</button>
                <button onClick={this.detener}>detener</button>
            </>
        );
    }
}

export default CicloVida;