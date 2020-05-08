import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

export class Tabla extends Component {


    delete(id){
        fetch('http://localhost:9000/api/v1/instrumento/' + id, {
        method: 'DELETE',
        })
        .then(res => res.json()) // or res.json()
        .then(res => console.log(res))
        window.location.reload();
    }

    render() {
        const airbag = 0;
        const celda = this.props.row.map( (element,i) =>{
            return(
            <React.Fragment key={element.id}>
                    <tr>
                    <td>{element.id}</td>
                    <td>{element.instrumento}</td>
                    <td>{element.precio}</td>
                    <td>  
                        <Link to={`/operation/${element.id}`}><Button variant="primary">Modificar</Button></Link>
                        <Button variant="danger" onClick={ () => this.delete(element.id)}>Eliminar</Button> 
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