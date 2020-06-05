import React from 'react';
import './App.css';
import Navbar from './Componentes/Navbar';
import { Container, Button } from '@material-ui/core';
import Slides from './Componentes/Slides';
import Carusel from './Componentes/Carusel';
import Footer from './Componentes/Footer';
import MenuIma from './Componentes/MenuImagenes';
import Titulo from './Componentes/Header';
import Titulo2 from './Componentes/Header2';
import GOTW from './Componentes/GOTW'
import Contacto from './Componentes/Contacto';
function App() {

  return (

  <div className='app'>  
  <Container maxWidth={'xl'}>
    <header>
      <Navbar/>
      <Carusel/>
      <Titulo/>
      <Slides/>
      <MenuIma/>
      <Titulo2/>
      <GOTW/>
      <Contacto/>
    </header>
    <div className='container'>
    </div>
  </Container>
  <footer className='app'>
          <Footer/>
  </footer>
  </div>

  )
}


export default App;
