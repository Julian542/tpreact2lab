import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

export class Tabla extends Component {

    
    render() {
        const celda = this.props.row.map( (element,i) =>{
            return(
            <React.Fragment key={element.id}>
                    <tr>
                    <td>{element.id}</td>
                    <td>{element.instrumento}</td>
                    <td>{element.precio}</td>
                    <td>  
                        <Link to={`/operation/${element.id}`}><Button variant="primary">Modificar</Button></Link>
                        <Button variant="danger">Eliminar</Button> 
                    </td>
                    </tr>
            </React.Fragment>
        )})
        return (
            <React.Fragment>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Instrumento</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {celda}
                    </tbody>
                </Table>
            </React.Fragment>
        )
    }
}