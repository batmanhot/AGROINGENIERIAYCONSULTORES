import logo from './logo.svg';
import './App.css';


import {BrowserRouter, Routes, Route} from 'react-router-dom';

import PiedePagina from './componentes/Footer'
import MenuNavbar from './componentes/NavBar'

import ItemsCards_TextoCentral_TopografiaGeodesia from './componentes/ItemsCards_TextoCentral_TopografiaGeodesia'
import ItemsCards_TextoCentral_RiegoTecnificadoFresas from './componentes/ItemsCards_TextoCentral_RiegoTecnificadoFresas'
import ItemsCards_TextoCentral_IngenieriaAgricola from './componentes/ItemsCards_TextoCentral_IngenieriaAgricola'
import ItemsCards_TextoCentral_ConstruccionObrasCiviles from './componentes/ItemsCards_TextoCentral_ConstruccionObrasCiviles'
import ItemsCards_Nosotros from './componentes/ItemsCards_Nosotros.jsx'
import ItemsCards_NuestrosClientes from './componentes/ItemsCards_TextoCentral_NuestrosClientes.jsx'
import ItemsCards_Portafolio from './componentes/ItemsCards_Texto_Portafolio.jsx'                
import ItemsCards_VentaProductos from './componentes/ItemsCards_TextoCentral_VentaProductos.jsx'
import ItemsCards_Contactos from './componentes/ItemsCards_TextoCentral_Contactos.jsx'
import ItemsCards_Tercerizaciones from './componentes/ItemsCards_Tercerizaciones.jsx'
import ItemsCards_HabilitacionUrbana from './componentes/ItemsCards_TextoCentral_HabilitacionUrbana.jsx'
import HomeWeb from './componentes/pages/home.jsx'


function App() {
  return (
    <div className="App">

      {/* <CartProvider> 
        <BrowserRouter>        
            <NavBar/>                        
            <Routes>
              <Route path='/' element={<Home/>}/> 
              <Route path='/productos' element={<ItemListContainer persona="LAS MEJORES PELICULAS EN ESPAÑOL LATINO, VEALAS AHORA" />}/>
              <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
              <Route path='/categoria/:idCategoria' element={<ItemListContainer persona="CATEGORIA"/>}/>
              <Route path='/carritodecompras' element={<CarritodeCompras/>}/> 
              <Route path='/CheckOut' element={<Checkout/>}/>         
            </Routes>   
            <br/>
        </BrowserRouter>
      </CartProvider>  */}

        <BrowserRouter>        
            <MenuNavbar/> 
            <Routes>
              <Route path='/' element = {<HomeWeb/>}/>               
              <Route path='/IngenieriaAgricola' element ={<ItemsCards_TextoCentral_IngenieriaAgricola/>}/>
              <Route path='/RiegoTecnificadoFresas' element ={<ItemsCards_TextoCentral_RiegoTecnificadoFresas/>}/>
              <Route path='/TopografiaGeodesia' element ={<ItemsCards_TextoCentral_TopografiaGeodesia/>}/> 
              <Route path='/ConstruccionObrasCiviles' element ={<ItemsCards_TextoCentral_ConstruccionObrasCiviles/>}/>
              <Route path='/Nosotros' element ={<ItemsCards_Nosotros/>}/>
              <Route path='/NuestrosClientes' element ={<ItemsCards_NuestrosClientes/>}/>
              <Route path='/Portafolio' element ={<ItemsCards_Portafolio/>}/>
              <Route path='/VentaProductos' element ={<ItemsCards_VentaProductos/>}/>
              <Route path='/Contactos' element ={<ItemsCards_Contactos/>}/>
              <Route path='/Tercerizaciones' element ={<ItemsCards_Tercerizaciones/>}/>
              <Route path='/HabilitacionUrbana' element ={<ItemsCards_HabilitacionUrbana/>}/>              
            </Routes>   
            <PiedePagina/>                 
        </BrowserRouter>
            
      {/* <MenuNavbar/> 
      <ItemsCards_TextoSuperpuesto_ImagenPrincipal/>
      <ItemsCards_Texto_NuestrosServicios/>
       <ItemsCards_TextoCentral_IngenieriaAgricola/>
       <ItemsCards_TextoCentral_RiegoTecnificadoFresas/>
       <ItemsCards_TextoCentral_TopografiaGeodesia/>             
       <ItemsCards_TextoCentral_ConstruccionObrasCiviles/>
       <ItemsCards_TextoCentral_ClientesSatisfechos/>
       <PiedePagina/> */}



       {/* /* NO TOMAR EN CUENTA */ }
       {/* /* NO TOMAR EN CUENTA */ }
       {/* /* NO TOMAR EN CUENTA */ }
       {/* <ItemsCards_TextoIzquierda /> */}
       {/* <ItemsCards_TextoSuperpuesto/> */}
       {/* <CarrouselTest2 /> */}
       {/* <ItemsCards_TextoCircular /> */}
       { /* <CarrouselAnimado /> */}

              
      {/* <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header> */}
    </div>
  );
}

export default App;

