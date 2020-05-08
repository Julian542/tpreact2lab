import React, { Component } from 'react';
import Navigator from './Navigator';
import {Tabla} from './Tabla';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


export class AbmRaiz extends Component{

    _isMounted = false;

    constructor(){
        super();
        this.state = { instrumento : [] }
    }

    componentDidMount(){
        this._isMounted = true;
        this.fetchInstrumentos();
    }
    fetchInstrumentos(){
        fetch('http://localhost:9000/api/v1/instrumento/')
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({instrumento:data})
            console.log(data);
        })
    }
    componentWillUnmount(){
        this._isMounted = false;
    }
    render(){
        return(
            <React.Fragment>
                <Navigator/>
                <div className = "sectionABM">
                <h1>En esta seccion podra Añadir, Modificar o Eliminar instrumentos</h1>
                <div className ="botonBig">
                    <Link to="/operation/nuevo"><Button variant="info" size="lg" block>Añadir Instrumento</Button></Link>
                </div>
                <div className="tablaABM">
                    <Tabla row={this.state.instrumento}/>
                </div>
                </div>
            </React.Fragment>
        )
    }
}