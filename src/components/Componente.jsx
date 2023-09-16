//para crear componentes se hace en una carpeta aparte con archivos .js o .jsx
import React, {Component} from "react";

class Componente extends Component{//crear el componente
    render(){//dentro de este return se escriben las etiquetas
        return <h2>titulo {this.props.propiedad}</h2>;//la propiedad deberia ser pasada a la hora de dibujar el componente
    }
}

export default Componente;