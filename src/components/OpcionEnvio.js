import React, { Component } from 'react';

class OpcionEnvio extends Component{
    render() {
        if (this.props.costoEnvio === "G") {
          return (
            <div className="gratis">
              <img src={require(`../assets/images/camion.png`)}></img>Envio Gratis a
              todo el pais
            </div>
          );
        } else {
          return (
            <div className="pago">
              Costo de Envio Interior de Argentina: ${this.props.costoEnvio}
            </div>
          );
        }
      }
}
export default OpcionEnvio;