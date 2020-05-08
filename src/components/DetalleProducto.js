import React, { Component } from "react";
import Navigator from "./Navigator";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { instrumentos } from "../data/instrumentos.json";
import OpcionEnvio from './OpcionEnvio';
import nro1 from '../assets/images/nro1.jpg';

class DetalleProducto extends Component {

    _isMounted = false;

    constructor() {
        super();
        this.state = {
            bd:{}
        }
    }

    componentDidMount(){
        this._isMounted = true;
        const parametro = this.props.match.params.id;
        this.fetchInstrumentoId(parametro);
    }

    fetchInstrumentoId(id){
        console.log('el id que recupero es...' + id)
        const idRecuperado = id;
        fetch('http://localhost:9000/api/v1/instrumento/' + idRecuperado)
        .then(response => response.json())
        .then(data =>{
            this.setState({bd:data});
        })
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    render() {
        return (
            <React.Fragment>
                <Navigator></Navigator>
                <div className="detalleFondo">
                    <Card className="detalleTarjeta">
                        <Container>
                            <Row>
                                <Col className="colUno">
                                    <img
                                        className="detalleFoto"
                                        src={nro1}
                                    />
                                    <h6 className="detalleDescripcion">
                                        Descripcion:
                                        <br />
                                        <br />
                                        {this.state.bd.descripcion}
                                    </h6>
                                </Col>
                                <Col className="colDos">
                                    <div className="fondito">
                                    <Row className="cantidadVendidos">
                                        {this.state.bd.cantidadVendida} vendidos
                                    </Row>
                                    <br />
                                    <Row>
                                        <h2>{this.state.bd.instrumento}</h2>
                                    </Row>
                                    <br />
                                    <Row>
                                        <h3>Precio:${this.state.bd.precio}</h3>
                                    </Row>
                                    <br />
                                    <Row>
                                        <h5>Marca:{this.state.bd.marca}</h5>
                                    </Row>
                                    <Row>
                                        <h5>modelo:{this.state.bd.modelo}</h5>
                                    </Row>
                                    <br />
                                    <Row>
                                        <h6>Costo Envio:</h6>
                                    </Row>
                                    <Row>
                                       <OpcionEnvio costoEnvio={this.state.bd.costoEnvio}></OpcionEnvio>
                                    </Row>
                                    <Row>
                                        
                                    <Button variant="outline-primary" size="lg" block>Agregar al Carrito</Button>
                                    </Row>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Nav.Link href="/productos">
                                        <h3>Volver</h3>
                                    </Nav.Link>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </div>
            </React.Fragment>
        );
    }
}
export default DetalleProducto;