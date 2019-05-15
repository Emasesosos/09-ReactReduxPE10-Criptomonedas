import React, { Component } from 'react';
import Formulario from './Formulario';
import Imagen from './Imagen';
import criptoImagen from './../img/cryptomonedas.png';
import './../css/App.css';

class App extends Component {

  componentDidMount() {
    console.log("¡Estoy Listo XD!");
  }

  render() {
    return(
      <div className="container">

        <div className="row">
          <div className="one-half column">
            <img src={criptoImagen} alt="imagen" className="logotipo"/>
          </div>
          <div className="one-half column">
            <h1>Cotiza Criptomonedas al Instante</h1>
            { /* Componente: Formulario */}
            <Formulario></Formulario>
          </div>
        </div>
        
        { /* Componente: Imagen  */ } 
        <Imagen></Imagen>

      </div>
    );
  }
}

/*
function App() {
  return (
    
  );
}
*/

export default App;
