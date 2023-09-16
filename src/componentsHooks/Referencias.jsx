import React, {createRef, useRef} from "react";//hooks para referencias con el dom

export default function Referencias(props){
    //let refMenu = createRef();//en caso de no usar hooks se usa el createRef
    let refMenu = useRef();//esto por cada elemento referenciado, el useRef para los hooks
    let refMenuBtn = useRef();

    const handleToggleMenu = (e) => {
        //const $menu = document.getElementById("menu");//el dom funciona pero no es recomendado
        if(refMenuBtn.current.textContent === "menu"){//asi se hace referencia al elemento
            refMenuBtn.current.textContent = "cerrar";
            refMenu.current.style.display = "block";
        } else {
            refMenuBtn.current.textContent = "menu";
            refMenu.current.style.display = "none";
        }
    }

    return(
        <>
            <h2>referencias</h2>
            <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>menu</button>{/*a los elementos referenciados se les pone el ref, no hace falta id*/}
            <nav id="menu" ref={refMenu} style={{display: "none"}}>{/*asi se ponen los csss rapidos*/}
                <a href="#">el</a><br />
                <a href="#">el</a><br />
                <a href="#">el</a><br />
                <a href="#">el</a><br />
                <a href="#">el</a><br />
                <a href="#">el</a><br />
            </nav>
        </>
    );
}