import { memo, useMemo } from "react";//necesario menos useMemo

const ContadorHijo = (props) => {//representa una pieza de codigo que no deberia recargarse, como la respuesta de una peticion
    console.log("renderiza por primera vez y ya");

    const pesado = useMemo(() => {
        let variablePesada;
        return variablePesada;
    }, []);//pensado para lo mismo pero con variables pesadas

    return(
        <>
            <p>menos</p>
            
            {pesado}{/*de esta manera, la variable que devuelve pesado solo se renderizara la primera vez (por lo del useMemo)*/}
        </>
    );
}

export default memo(ContadorHijo);//al exportarlo como memo, solo se renderizara la primera vez, sin recalcular