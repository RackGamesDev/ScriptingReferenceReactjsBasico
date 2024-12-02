import { useReducer } from "react";

const initialState = {contador: 0};//Segundo parametro del useReducer
const TYPES = {//Los tipos de accion de la variable
    INCREMENT: "INCREMENT",
    INCREMENT_5: "INCREMENT_5",
    DECREMENT: "DECREMENT",
    DECREMENT_5: "DECREMENT_5",
    RESET: "RESET"
}
const init = (initialState) => {//Forma opcional de empezar la variable
    return({
        contador: initialState.contador + 100//Valor inicial
    });
}
function reducer(state, action){//Primer parametro del useReducer (esta funcion se suele poner en un archivo aparte junto a sus dependencias)
    switch(action.type){//Cuando se llama a cambiar la variable se usa este segundo parametro, type seria que accion va a hacerse a la variable
        case TYPES.INCREMENT:
            return {contador: state.contador + 1}
        case TYPES.DECREMENT:
            return {contador: state.contador - 1}
        case TYPES.DECREMENT_5:
            return {contador: state.contador + action.payload}//Usando el payload ya usado
        case TYPES.INCREMENT_5:
            return {contador: state.contador + action.payload}
        case TYPES.RESET:
            return initialState;
        default:
            return state;
    }
    //return state;
}

const Contador = () => {
    //const [contador, setcontador] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState, init);//Usando el useReducer, es algo similar al useState  (useReducer(funcion de mas arriba, estado inicial de la variable, la funcion init de mas arriba opcional))
    const sumar = () => dispatch({type: TYPES.INCREMENT});//Llamando a cambiar la variable
    const sumar5 = () => dispatch({type: TYPES.INCREMENT_5, payload: 5});//Usando un payload para valores especificos
    const restar = () => dispatch({type: TYPES.DECREMENT});
    const restar5 = () => dispatch({type: TYPES.DECREMENT_5, payload: -5});
    const reset = () => dispatch({type: TYPES.RESET});
    return(
        <> 
            <h3>contador</h3>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={sumar5}>+5</button>
                <button onClick={restar}>-</button>
                <button onClick={restar5}>-5</button>
                <button onClick={reset}>0</button>
            </nav>
            <h4>{state.contador}</h4>{/*Accediendo a la variable del reducer*/}
        </>
    );
}

export default Contador;

//El reducer se usa cuando se tenga que usar un useState mas avanzado, con una funcion controlada sin efectos secundarios
