import React from "react";
import logo from './logo.svg';
import Componente from "./components/Componente";
import './App.css';
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElemento from "./components/RenderizadoElemento";
function App() {
  let nombre = "Ileana";
  let auth = false;
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section> 
      <section>
        <Componente msg="Hola soy un Componente Funcional Expresado desde una prop">
          <br/>
        </Componente>
        <hr/>
        <Propiedades cadena="String" 
        numero = "19"
        booleano = {true}
        arreglo={[1,2,3]}
        objeto={{nombre: "Ileana", correo: "ile@mail.com"}}
        funcion={(num) => num * num}
        elementoReact={<i>Esto es un Elemento React</i>}
        componenteReact={<Componente msg="Soy un componente pasado como Propiedad"/>}
        />
        <hr/>
        <Estado/>
        <hr/>
        <RenderizadoCondicional/>
        <RenderizadoElemento/>
      </section>
      </header>
    </div>
    
  );
}

export default App;
