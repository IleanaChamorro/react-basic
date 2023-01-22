/*Comunicación entre componentes 
Comunicación entre componentes no relacionados
*/
import React, { Component } from 'react';

export default class Padre extends Component{

    state = {
        contador: 0
    };

    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    };

    render(){
        return(
            <>
            <h2>
                Comunicación entre Componentes
            </h2>
            <p>Contador <b>{this.state.contador}</b></p>
                <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo 1"/>
            {/*Comunicación entre un componente padre a un hijo a través de props*/}
                <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo 2"/>
            </>
        )
    }
}

/* */
function Hijo(props){
    return(
        <>
        <h3>{props.mensaje}</h3>
        {/*Comunicación entre un componente hijo a su padre mediante eventos */}
        <button onClick={props.incrementarContador}>+</button>
        </>
    )
}