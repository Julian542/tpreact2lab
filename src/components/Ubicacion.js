import React, { Component } from "react";
import Navigator from "./Navigator";
import ubicacionmapa from '../assets/images/ubicacionmapa.png';

class Ubicacion extends Component{

    render(){
        return(
            <React.Fragment>
                <Navigator></Navigator>
                <div id="div">
                <h1>¡Visita nuestro local en Av.San Martin y Av.Las Heras, en Ciudad de Mendoza!</h1>
                <img src={ubicacionmapa}></img>
                </div>
            </React.Fragment>
        );
    }
}
export default Ubicacion;