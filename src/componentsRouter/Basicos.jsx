//en cada ruta declarada cargara un contenido html, entendiendo ruta como la parte despues del dominio en la url
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";//necesario para el router y hashrouter, lo del switch y links esta obsoleto
import Inicio from "./pages/PageInicio.jsx";//importando las paginas, que en realidad son elementos
import Contacto from "./pages/PageContacto.jsx";
import Acerca from "./pages/PageAcerca.jsx";
import Usuario from "./pages/PageUsuario.jsx";
import Productos from "./pages/PageProductos.jsx";
const Basicos = (props) => {

    return(
        <div>
            <h2>basicos</h2>
            <Router>{/*lo logico seria poner esto en el principio y hacer un app por cada ruta, todo lo que haya fuera del router se renderizara siempre*/}
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>{/*cada route adherira a este elemento el otro elemento que se le especifique cuando la url acabe en eso, los componentes se suelen importar de otros archivos*/}
                    <Route path="/acerca" element={<Acerca />}></Route>
                    <Route path="/contacto" element={<Contacto />}></Route>
                    <Route path="/usuario/:nombre/:id" element={<Usuario />}></Route>{/*pasando variables : que luego leera la pagina*/}
                    <Route path="/productos" element={<Productos />}></Route>{/*en este se pasan variables ?& que tambien se puede combinar con lo de antes*/}
                    <Route path="/*" element={<Err/>}></Route>{/*para cuando haya 404*/}
                </Routes>
            </Router>
            <h4>los #</h4>
            <HashRouter>{/*funciona como el router, pero lo que calcula es el texto despues del # en la url, porque lo que haya despues del # no lo computa como pagina aparte. esto tiene la propiedad basename="" para que todas las rutas empiecen con eso*/}
                <Routes>
                    <Route path="" element={<Inicio />}></Route>{/*este elemento se renderizara cuando al url sea "dominio/#/loquesea" siendo loquesea el path*/}
                    <Route path="acerca" element={<Acerca />}></Route>{/*ejemplo: dominio.com/#acerca*/}
                    <Route path="contacto" element={<Contacto />}></Route>
                    <Route path="*" element={<Err/>}></Route>{/*el 404 no se suele usar aqui pero igual funciona*/}
                </Routes>
            </HashRouter>
        </div>
    );
}

const Err = () => {
    return(<h3>error 404</h3>)
}



export default Basicos;