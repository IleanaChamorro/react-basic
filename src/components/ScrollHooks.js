import React, { useEffect, useState } from 'react';


export default function ScrollHooks(){
    //variable de estado
    const [scrollY, setScrollY] = useState(0);
    //uso del ciclo de vida en un componente funcional
    useEffect(() => {
        //Todo lo que este dentro de la función se ejcutará cada vez que el componente se renderice 
        console.log("Moviendo el Scroll");


        const detectarScroll = () => {
            setScrollY(window.pageYOffset);
        }

        window.addEventListener("scroll", detectarScroll);
        console.log(scrollY);

        //cuando ya no exista el hook
        return () => {
            window.removeEventListener("scroll", detectarScroll);
            console.log("Fase de desmontaje")
        }
    });

    useEffect(() => {
        console.log("Fase de Montaje")
        //Segundo parámetro al hook debe ser un array con los valores de los que dependerá el efecto, de forma que sólo se ejecutará cuando ese valor cambie 
    
        //En caso de pasar un array vacío, el efecto no depende de ningún valor, por que sólo se ejecutará al montarse y desmontarse 
    }, [scrollY]);

    useEffect(() => {
        console.log("Fase de actualización ")
    });

    useEffect(() => {
        //al retornar, se cancela lo que se ejecuto en el cuerpo de la función 
        return () => {
            console.log("Fase de Desmontaje");
        }
    })
    return(
        <>
        <h2>Hooks - useEffect y el Ciclo de Vida</h2>
        <p>Scroll Y del Navegador {scrollY} px</p>
        
        </>
    )
}