import React, { Component } from 'react';
import './assets/css/App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Ubicacion from './components/Ubicacion';
import Productos from './components/Productos';
import DetalleProducto from './components/DetalleProducto';
import {NotFound} from './components/NotFound';
import { AbmRaiz } from './components/AbmRaiz';
import {Post} from './components/Post';
import {Put} from './components/Put';

class App extends Component{

  render(){
    return(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/ubicacion" component={Ubicacion}/>
        <Route exact path="/productos" component={Productos}/>
        <Route exact path="/detalleProducto/:id" component={DetalleProducto}/>
        <Route exact path="/abm" component={AbmRaiz}/>
        <Route  path="/operation/nuevo" component={Post}/>
        <Route  path="/operation/:id" component={Put}/>
        <Route component={NotFound}/>
    </Switch>
    
          );
  }
  
}
export default App;
