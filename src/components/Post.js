import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navigator from './Navigator';
import axios from 'axios';


export class Post extends Component {
    constructor() {
        super();
        this.state = {
                id:'',
                cantidadVendida:0,
                costoEnvio:'',
                descripcion:'',
                imagen:'',
                instrumento:'',
                marca:'',
                modelo:'',
                precio:0
        }
    }
    changeHandler = (e) =>{
        const propiedad = [e.target.name];;
        this.setState({ [e.target.name] : e.target.value})
    }

    submitHandler = (e) =>{
        const form = e.currentTarget;
        const nuevoInstrumento = {
                cantidadVendida: this.state.cantidadVendida,
                costoEnvio: this.state.costoEnvio ,
                descripcion: this.state.descripcion ,
                imagen: this.state.imagen ,
                instrumento: this.state.instrumento,
                marca: this.state.marca,
                modelo: this.state.modelo,
                precio: this.state.precio
        };
        axios.post('http://localhost:9000/api/v1/instrumento/',nuevoInstrumento)
        .then(response =>{
            console.log(response)
            alert('Registro añadido con exito!')
            window.location.href = "/productos";
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render() {

        return (
            <React.Fragment>
                <Navigator />
                <h1>Agregar un nuevo instrumento</h1>
                    <div className="center">
                        <Form onSubmit={this.submitHandler}>
                            <Form.Group>
                                <Form.Label><strong>Instrumento</strong></Form.Label>
                                <Form.Control name="instrumento" id="instrumento" onChange={this.changeHandler} type="text" placeholder="Ingrese el nombre del instrumento" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Marca</strong></Form.Label>
                                <Form.Control name="marca" id="marca" onChange={this.changeHandler} type="text" placeholder="Ingrese la marca" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Modelo</strong></Form.Label>
                                <Form.Control name="modelo" id="modelo" onChange={this.changeHandler} type="text" placeholder="Ingrese el modelo" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Precio</strong></Form.Label>
                                <Form.Control name="precio" id="precio" onChange={this.changeHandler} type="number" placeholder="Ingrese el precio" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Cantidad Vendida</strong></Form.Label>
                                <Form.Control name="cantidadVendida" id="cantidadVendida" onChange={this.changeHandler} type="number" placeholder="Ingrese cantidad vendida" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Costo Envio</strong></Form.Label>
                                <Form.Control name="costoEnvio" id="costoEnvio" onChange={this.changeHandler} type="text" placeholder="Ingrese costo envio o G si es gratis el envio" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Descripcion</strong></Form.Label>
                                <Form.Control name="descripcion" id="descripcion" onChange={this.changeHandler} type="text" placeholder="Ingrese una breve descripcion sobre el producto" required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Imagen</strong></Form.Label>
                                <Form.Control name="imagen" id="imagen" onChange={this.changeHandler} type="text" placeholder="Prueba para la imagen" required />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Añadir nuevo instrumento
                            </Button>
                        </Form>
                    </div>
            </React.Fragment>
        )
    }
}