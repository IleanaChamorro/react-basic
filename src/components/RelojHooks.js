import React, { useState, useEffect} from 'react';

function Reloj(hora){
    return <h3>{hora}</h3>
}



export default function RelojHooks(){
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);
 
    useEffect(() => {

    }); 

    return(
        <>
        <h2>Reloj con Hooks</h2>
        {visible && <Reloj hora={hora}/>}
        <button onClick={() => setVisible(true)}>Iniciar</button>
        <button onClick={() => setVisible(false)}>Detener</button>
        </>
    );
}