import React, { Component } from 'react';
import axios from 'axios';
import Criptomoneda from './Criptomoneda';
import Error from './Error';

class Formulario extends Component {

    state = {
        criptomonedas: [],
        moneda: '',
        criptomoneda: '',
        error: false,
    }

    /* Antes de que se cargue el componente ya se hace el llamado */
    async componentWillMount() {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        
        await axios.get(url)
            .then(respuesta => {
                const { data } = respuesta;
                console.log(respuesta);
                this.setState({
                    criptomonedas: data.Data,
                })
            })
    }

    /* Se ejecuta cada que el usuario elige una opción del select */
    obtenerValor = e => {
        // console.log(e.target);
        const { name, value } = e.target;
        this.setState({
            [name] : value,
        })

    }

    /* Validar que el Usuario eliga las monedas */
    cotizarMoneda = e => {
        e.preventDefault();
        console.log('Enviando...');

        // ***** Validar que haya algo en el state
        const { moneda, criptomoneda } = this.state;

        if (moneda === '' || criptomoneda === '') {
            this.setState({
                error: true,
            }, () => {
                setTimeout(() => {
                    this.setState({
                        error: false,
                    })
                }, 3000);
            })
        }

        // ***** Crear el Objeto

        // ***** Enviar los datos al componente App.js para cotizar
    }

    render() {

        const mensaje = (this.state.error) ? <Error
                                                    mensaje="Ambos campos son Obligatorios"
                                             ></Error>
                        : '';
        return(
            <form action="" onSubmit={this.cotizarMoneda}>
                {/* Carga mensaje de validación de formulario */}
                {mensaje}
                <div className="row">
                    <label htmlFor="">Elige tu Moneda</label>
                    <select 
                        onChange={this.obtenerValor}
                        name="moneda"
                        className="u-full-width" id="">
                            <option value="">Elige tu Moneda</option>
                            <option value="USD">Dolar Estadounidense</option>
                            <option value="MXN">Peso Mexicano</option>
                            <option value="GBP">Libras</option>
                            <option value="EUR">Euros</option>
                    </select>
                </div>

                <div className="row">
                    <div>
                        <label htmlFor="">Elige tu Criptomoneda</label>
                        <select 
                            onChange={this.obtenerValor}
                            name="criptomoneda"
                            className="u-full-width" id="">
                                <option value="">Elige tu Criptomoneda</option>
                                {Object.keys(this.state.criptomonedas).map(key => (
                                <Criptomoneda
                                                    key={key}
                                                    criptomoneda={this.state.criptomonedas[key]}
                                ></Criptomoneda> 
                                ))}
                        </select>
                    </div>
                </div>

                <input className="button-primary u-full-width" type="submit" value="Cotizar"/>
            </form> 
        );
    }
}

export default Formulario;