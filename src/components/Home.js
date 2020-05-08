import React, { Component } from "react";
import Navigator from "./Navigator";

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Navigator></Navigator>
                <div id="div">
                    <h1>Musical Hendrix</h1>
                    <p>
                        Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el
                        conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.
                    </p>
                </div>
                <div className="footer-home">
                    <p>
                        Trabajo Practico 5 (Semana 6, React) por Walter Julian Gutierrez Caligaris, Nicolas Astorga, Joel Valenti, Fernando Rocha
                    </p>
                </div>
            </React.Fragment>
        );
    }
}
export default Home;