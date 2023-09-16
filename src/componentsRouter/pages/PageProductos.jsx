import { useLocation } from "react-router-dom";
//import { useHistory } from "react-router";  ya no va

const Productos = () => {
    let {search} = useLocation();
    let query = new URLSearchParams(search);//query almacena todas las variables ?& de la url
    let varA = query.get("variableA");//por cada posible variable
    let varB = query.get("variableB");

    //let history = useHistory();//hace referencia al historial de esa pestagna  ya no va
    return(
        <>
            <h3>a= {varA}  b={varB}</h3>
        </>
    );
}
//http://localhost:5173/productos?variableA=123&variableB=3321  ejemplo
export default Productos;