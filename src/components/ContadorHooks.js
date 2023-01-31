import React, { useState } from 'react';

export default function ContadorHooks(props){
    //destructuracion useState, variable de estado
    //Primer elemento: valor del estado
    //Segundo elemento: método para actualizarlo
    //Parámetro valor inicial del estado al método useState
    const [contador, setContador] = useState(0);



    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);

    return(
        <>
        <h2>Hooks - useState </h2>
        <nav>
            <button onClick={sumar}>
                +
            </button>
            <button onClick={restar}>
                -
            </button>
        </nav>
        <p>Contador de {props.titulo}</p>
        {/*Mostrar variable de estado */}
        <h3>{contador}</h3>
        </>
    );
}

//Propiedades por defecto
ContadorHooks.defaultProps = {
    titulo: "Clicks",
}