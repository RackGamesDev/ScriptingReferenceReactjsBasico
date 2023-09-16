import React, {Component} from "react";

function Pokemon(props){
    return(
        <figure>
            <p>{props.name}</p>
        </figure>
    );
}

export default class AjaxApi extends Component{
    state = {
        pokemons: []
    }
    componentDidMount(){//las peticiones se hacen aqui
        let url = "https://pokeapi.co/api/v2/pokemon/";//url de la peticion
        fetch(url)//las peticiones funcionarian como de normal dentro de la funcion
        .then(res => res.json())
        .then(json => {
            //console.log(json);
            json.results.forEach((el) => {
                let pokemon = {
                    name: json.name
                }
                let pokemons = [...this.state.pokemons, pokemon];
                this.setState({
                    pokemons
                });
            });
        });
    }
    render(){
        return(
            <>
                <h2>async</h2>
                {/*this.state.pokemons === 0 ? (<h3>cargando</h3>) : this.state.pokemons.map(el => <Pokemon key={el.id} name={el.name}/>)*/}
            </>
        );
    }
}