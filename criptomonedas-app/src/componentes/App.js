import React, { Component } from 'react';
import Formulario from './Formulario';
import Imagen from './Imagen';
import Resultado from './Resultado';
import Spinner from './Spinner';
import criptoImagen from './../img/cryptomonedas.png';
import axios from 'axios';
import './../css/App.css';


class App extends Component {

  componentDidMount() {
    console.log("¡Estoy Listo XD!");
  }

  state = {
    resultado: {},
    monedaSeleccionada: '',
    criptoSeleccionada: '',
    cargando: false
  }

  cotizarCriptoMoneda = async (cotizacion) => {
    // console.log(cotizacion);

    // ***** Obtener los valores
    const { moneda, criptomoneda } = cotizacion;

    // ***** Realizar consulra con Axios a la API
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    
    // console.log(url);

    await axios.get(url)
      .then(respuesta => {
        // console.log(respuesta);
        const { data } = respuesta;
        // console.log(data.DISPLAY[criptomoneda]);
        this.setState({
          resultado: data.DISPLAY[criptomoneda][moneda],
          cargando: true
        }, () => {
          // 3 Segundos despúes cambia a false
          setTimeout(() => {
            this.setState({
              cargando:false
            })
          }, 3000);
        })
      });
    
  }

  render() {
    { /* Componente: Resultado */}
    { /* Componente: Spinner */}

    const resultado = (this.state.cargando) ? <Spinner></Spinner> : <Resultado 
                                                                                resultado={this.state.resultado}
                                                                    ></Resultado>;
    return(
      <div className="container">

        <div className="row">
          <div className="one-half column">
            <img src={criptoImagen} alt="imagen" className="logotipo"/>
          </div>
          <div className="one-half column">
            <h1>Cotiza Criptomonedas al Instante</h1>
            { /* Componente: Formulario */}
            <Formulario
                        cotizarCriptoMoneda={this.cotizarCriptoMoneda}
            ></Formulario>
            { /* Componentes para 'resultados' */ }
            {resultado}

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
