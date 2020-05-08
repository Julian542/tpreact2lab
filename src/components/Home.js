import React, { Component } from "react";
import Navigator from "./Navigator";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigator/> 
                <div className="home">
                    Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el
                    conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.
                    <br></br>
                    <br></br>
                    <a href="/productos" className="link">¡Ver nuestros productos!</a>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p><strong>HECHO POR ASTORGA, GUTIERREZ, ROCHA Y VALENTI </strong></p>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;