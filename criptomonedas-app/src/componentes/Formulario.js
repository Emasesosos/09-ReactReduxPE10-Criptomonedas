import React, { Component } from 'react';
import axios from 'axios';

class Formulario extends Component {

    state = {
        criptomonedas: [],
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

    render() {
        return(
            <form action="">
                <div className="row">
                    <label htmlFor="">Elige tu Moneda</label>
                    <select className="u-full-width" name="" id="">
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
                        <select className="u-full-width" name="" id="">
                            <option value="">Elige tu Criptomoneda</option>
                        </select>
                    </div>
                </div>

                <input className="button-primary u-full-width" type="submit" value="Cotizar"/>
            </form> 
        );
    }
}

export default Formulario;