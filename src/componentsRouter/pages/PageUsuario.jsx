import { useParams } from "react-router";

const Usuario = () => {
    let params = useParams();//objeto con variables : pasadas desde el router
    return(<>
        <h3>nombre= {params.nombre} id= {params.id}</h3>
    </>);
}

export default Usuario;