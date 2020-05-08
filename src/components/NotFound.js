import React, { Component } from 'react';
import Navigator from './Navigator';

export class NotFound extends Component{
    render(){
        return(
            <React.Fragment>
                <Navigator/>
                <div className="NotFoundComponent">
                    <h1>Ups! Error 404</h1>
                    <h2>No hemos podido encontrar lo que estás buscando!</h2>
                    <a href="/">Volver a la pagina principal</a>
                </div>
            </React.Fragment>
        )
    }
}