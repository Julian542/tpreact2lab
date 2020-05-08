import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navigator from './Navigator';
import axios from 'axios';

export class Put extends Component{
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
    componentDidMount(){
        const idc = this.props.match.params.id;
        fetch('http://localhost:9000/api/v1/instrumento/' + idc)
            .then(response => response.json())
            .then(data => {
                const objeto = data ;
                this.setState( { id : objeto.id})
                this.setState( { cantidadVendida : objeto.cantidadVendida})
                this.setState( { costoEnvio : objeto.costoEnvio})
                this.setState( { descripcion : objeto.descripcion})
                this.setState( { imagen : objeto.imagen})
                this.setState( { instrumento : objeto.instrumento})
                this.setState( { marca : objeto.marca})
                this.setState( { modelo : objeto.modelo})
                this.setState( { precio : objeto.precio})
            })
            
    }
    changeHandler = (e) =>{
        const propiedad = [e.target.name];;
        this.setState({ [e.target.name] : e.target.value})
    }

    submitHandler = (e) =>{
        const form = e.currentTarget;
        const nuevoInstrumento = {
                id:this.state.id,
                cantidadVendida: this.state.cantidadVendida,
                costoEnvio: this.state.costoEnvio ,
                descripcion: this.state.descripcion ,
                imagen: this.state.imagen ,
                instrumento: this.state.instrumento,
                marca: this.state.marca,
                modelo: this.state.modelo,
                precio: this.state.precio
        };
        console.log(nuevoInstrumento);
        axios.put('http://localhost:9000/api/v1/instrumento/'+this.state.id, nuevoInstrumento)
        .then(response =>{
            console.log(response)
            window.location.href = "/productos";
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render(){
        const {instrumento,marca,modelo,precio,cantidadVendida,costoEnvio,descripcion,imagen} = this.state;
        return(
            <React.Fragment>
                <Navigator/>
                <h1>Modificar instrumento</h1>
                    <div className="center">
                        <Form onSubmit={this.submitHandler}>
                            <Form.Group>
                                <Form.Label><strong>Instrumento</strong></Form.Label>
                                <Form.Control name="instrumento" id="instrumento" onChange={this.changeHandler} type="text" placeholder="Ingrese el nombre del instrumento" value={instrumento} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Marca</strong></Form.Label>
                                <Form.Control name="marca" id="marca" onChange={this.changeHandler} type="text" placeholder="Ingrese la marca"  value={marca} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Modelo</strong></Form.Label>
                                <Form.Control name="modelo" id="modelo" onChange={this.changeHandler} type="text" placeholder="Ingrese el modelo"  value={modelo} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Precio</strong></Form.Label>
                                <Form.Control name="precio" id="precio" onChange={this.changeHandler} type="number" placeholder="Ingrese el precio"  value={precio} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Cantidad Vendida</strong></Form.Label>
                                <Form.Control name="cantidadVendida" id="cantidadVendida" onChange={this.changeHandler} type="number" placeholder="Ingrese cantidad vendida"  value={cantidadVendida} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Costo Envio</strong></Form.Label>
                                <Form.Control name="costoEnvio" id="costoEnvio" onChange={this.changeHandler} type="text" placeholder="Ingrese costo envio o G si es gratis el envio"  value={costoEnvio} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Descripcion</strong></Form.Label>
                                <Form.Control name="descripcion" id="descripcion" onChange={this.changeHandler} type="text" placeholder="Ingrese una breve descripcion sobre el producto"  value={descripcion} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Imagen</strong></Form.Label>
                                <Form.Control name="imagen" id="imagen" onChange={this.changeHandler} type="text" placeholder="Prueba para la imagen" value={imagen}  required />
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