
/*Referencias -> proporcionan una forma de acceder a los nodos del DOM o elementos de React (similar a selector en el DOM)*/
import React, { createRef, useRef  } from 'react';

export default function Referencias(){
    //Crear variable de referencia con class component
    //let refMenu = createRef(),
    let refMenu = useRef(),
    //crear referencia con hook
    refMenuBtn = useRef();



    const handleToggleMenu = (e) => {
        /*
        const $menu = document.getElementById("menu");

        if(e.target.textContent === "Menú"){
            e.target.textContent = "Cerrar";
            $menu.style.display = "block";
        }else{
            e.target.textContent = "Menú";
            $menu.style.display = "none";
        }
        */
        if(refMenuBtn.current.textContent === "Menú"){
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block";
        }else{
            refMenuBtn.current.textContent = "Menú";
            refMenu.current.style.display = "none";
        }
    }
    return(
        <>
        <h2>Referencias </h2>
        <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menú</button>
        <nav id="menu" ref={refMenu} style={{display: "none"}}> 
        <a href="#">Sección 1</a>
        <br/>
        <a href="#">Sección 2</a>
        <br/>
        <a href="#">Sección 3</a>
        <br/>
        <a href="#">Sección 4</a>
        <br/>
        <a href="#">Sección 5</a>
        <br/>
        </nav>
        </>
    )
}