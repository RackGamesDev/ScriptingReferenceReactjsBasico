//Para crear componentes se hace en una carpeta aparte con archivos .js o .jsx
import React, {Component} from "react";

class Componente extends Component{//Crear el componente
    render(){//Dentro de este return se escriben las etiquetas
        return <h2>titulo {this.props.propiedad}</h2>;//La propiedad deberia ser pasada a la hora de dibujar el componente
    }
}

export default Componente;
