import React, {Component} from "react";

/*Componente funcional */
function EstadoalHijo(props){
    return(
        <div>
            <h3>
                {props.contadorHijo}
            </h3>
        </div>
    )
}
export default class Estado extends Component{
    /*Objeto del estado */
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        };
    
        /*
        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            });
        }, 1000);
        */
    }
    
    render(){
        return(
            <div>
                <h2>El State</h2>
                <p>{this.state.contador}</p>
                <EstadoalHijo contadorHijo={this.state.contador}/>
            </div>
        )
    }
}