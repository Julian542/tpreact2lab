import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navigator from './Navigator';


export class FormPage extends Component {
    constructor() {
        super();
        this.state = {
            titulo: '',
            instrumento: {}
        }
    }
    componentDidMount() {
        this.setState({ titulo: this.funcionTitulo() });
        const idInst = this.props.match.params.id;
        if (idInst !== undefined) {
            this.cargarInstrumento(idInst);
        }
    }

    funcionTitulo = (data) => {
        if (this.props.match.params.id === undefined) {
            return (
                <h1>Agregar un nuevo instrumento</h1>
            )
        } else {
            return (
                <h1>Modificar instrumento</h1>
            )
        };
    }

    cargarInstrumento(idInst) {
        fetch('http://localhost:9000/api/v1/instrumento/' + idInst)
            .then(response => response.json())
            .then(data => {
                this.setState({ instrumento: data });
            })
    }

    cargaForm(parameterId) {
        if (parameterId === undefined) {
           
            return (
                <React.Fragment>
                    <div className="center">
                        <Form onSubmit={this.submitHandler}>
                            <Form.Group controlId="formBasicNro1">
                                <Form.Label><strong>Instrumento</strong></Form.Label>
                                <Form.Control name="nro1" id="nro1" onChange={this.changeHandler} type="text" placeholder="Ingrese el nombre del instrumento" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicNro2">
                                <Form.Label><strong>Marca</strong></Form.Label>
                                <Form.Control name="nro2" id="nro2" onChange={this.changeHandler} type="text" placeholder="Ingrese la marca" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicNro3">
                                <Form.Label><strong>Modelo</strong></Form.Label>
                                <Form.Control name="nro3" id="nro3" onChange={this.changeHandler} type="text" placeholder="Ingrese el modelo" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicNro4">
                                <Form.Label><strong>Precio</strong></Form.Label>
                                <Form.Control name="nro4" id="nro4" onChange={this.changeHandler} type="number" placeholder="Ingrese el precio" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicNro5">
                                <Form.Label><strong>Cantidad Vendida</strong></Form.Label>
                                <Form.Control name="nro5" id="nro5" onChange={this.changeHandler} type="number" placeholder="Ingrese cantidad vendida" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicNro6">
                                <Form.Label><strong>Precio</strong></Form.Label>
                                <Form.Control name="nro6" id="nro6" onChange={this.changeHandler} type="text" placeholder="Ingrese costo envio o G si es gratis el envio" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicNro7">
                                <Form.Label><strong>Descripcion</strong></Form.Label>
                                <Form.Control name="nro7" id="nro7" onChange={this.changeHandler} type="number" placeholder="Ingrese una breve descripcion sobre el producto" required />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Añadir nuevo instrumento
                            </Button>
                        </Form>
                    </div>
                </React.Fragment>
            )
        } else {
            console.log(this.state.instrumento);
            return (
                <React.Fragment>
                    <div className="center">
                        <Form onSubmit={this.submitHandler}>
                            <Form.Group controlId="formBasicNro1">
                                <Form.Label><strong>Instrumento</strong></Form.Label>
                                <Form.Control name="nro1" id="nro1" onChange={this.changeHandler} type="text" value={this.state.instrumento.instrumento} placeholder="Ingrese el nombre del instrumento" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicNro2">
                                <Form.Label><strong>Marca</strong></Form.Label>
                                <Form.Control name="nro2" id="nro2" onChange={this.changeHandler} type="text" value={this.state.instrumento.marca} placeholder="Ingrese la marca" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicNro3">
                                <Form.Label><strong>Modelo</strong></Form.Label>
                                <Form.Control name="nro3" id="nro3" onChange={this.changeHandler} type="text" value={this.state.instrumento.modelo} placeholder="Ingrese el modelo" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicNro4">
                                <Form.Label><strong>Precio</strong></Form.Label>
                                <Form.Control name="nro4" id="nro4" onChange={this.changeHandler} type="number" value={this.state.instrumento.precio} placeholder="Ingrese el precio" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicNro5">
                                <Form.Label><strong>Cantidad Vendida</strong></Form.Label>
                                <Form.Control name="nro5" id="nro5" onChange={this.changeHandler} type="number" value={this.state.instrumento.cantidadVendida} placeholder="Ingrese cantidad vendida" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicNro6">
                                <Form.Label><strong>Precio</strong></Form.Label>
                                <Form.Control name="nro6" id="nro6" onChange={this.changeHandler} type="text" value={this.state.instrumento.costoEnvio} placeholder="Ingrese costo envio o G si es gratis el envio" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicNro7">
                                <Form.Label><strong>Descripcion</strong></Form.Label>
                                <Form.Control name="nro7" id="nro7" onChange={this.changeHandler} type="text" value={this.state.instrumento.descripcion} placeholder="Ingrese una breve descripcion sobre el producto" required />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Modificar
                            </Button>
                        </Form>
                    </div>
                </React.Fragment>
            )
        }
    }

    render() {

        return (
            <React.Fragment>
                <Navigator />
                {this.state.titulo}
                {this.cargaForm(this.state.instrumento.id)}
            </React.Fragment>
        )
    }
}