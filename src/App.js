import React from "react";
import logo from './logo.svg';
import Componente from "./components/Componente";
import './App.css';
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElemento from "./components/RenderizadoElemento";
import {EventosES6, EventosES7, MasSobreEventos} from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import ComponentesEstilizados from "./components/ComponentesEstilizados";

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
        <hr/>
        <RenderizadoElemento/>
        <hr/>
        <EventosES6/>
        <hr/>
        <EventosES7/>
        <hr/>
        <MasSobreEventos/>
        <hr/>
        <ComunicacionComponentes/>
        <hr/>
        <CicloVida/>
        <hr/>
        <ContadorHooks titulo="Seguidores" />
        <hr/>
        <ScrollHooks/>
        <hr/>
        <RelojHooks/>
        <hr/>
        <AjaxHooks/>
        <hr/>   
        <Referencias/>
        <hr/>
        <Formularios/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <ComponentesEstilizados/>
        </section>
      </header>
    </div>
    
  );
}

export default App;
