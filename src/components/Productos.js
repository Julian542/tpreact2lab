import React,{ Component } from "react"
import Navigator from "./Navigator";
import Tarjeta from "./Tarjeta";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Productos extends Component{

    _isMounted = false;

    constructor(){
        super();
        this.state = {
            bd:[]
        }
    }

    componentDidMount(){
        this._isMounted = true;
        this.fetchInstrumentos();
    }
    fetchInstrumentos(){
        fetch('http://localhost:9000/api/v1/instrumento/')
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({bd:data})
            console.log(data);
        })
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    render(){
        const instrumentos = this.state.bd.map((instrumento,i)=>{return(
            <Tarjeta key={instrumento.id} id={instrumento.id} titulo={instrumento.instrumento} precio={instrumento.precio} costoEnvio={instrumento.costoEnvio} cantidadVendida={instrumento.cantidadVendida} ></Tarjeta>
        )})

        return(
            <React.Fragment>
                <Navigator></Navigator>
                <Container fluid="md">
                       {instrumentos}  
                </Container>
            </React.Fragment>
        );
    }
}

export default Productos;