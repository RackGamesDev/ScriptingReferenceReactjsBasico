import React, {Component} from "react";

function Login(){//metacomponentes
    return(
        <div>
            <h3>login</h3>
        </div>
    );
}
function Logout(){
    return(
        <div>
            <h3>logout</h3>
        </div>
    );
}

export default class RenderizadoCondicional extends Component {
    constructor(props){
        super(props);
        this.state = {
            session: true
        }
    }
    render(){
        return(
            <div>
                <h2>reeee</h2>
                {this.state.session ? <Login/> : <Logout/>}{/*dependiendo de una prop renderiza una cosa u otra*/}
            </div>
        );
    }
}