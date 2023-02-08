import React from 'react';

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ImagenPrincipalSeccion from './ItemsCards_ImagenPrincipal_VentaProductos.jsx'

import { GiShinyApple, GiSlicedBread} from "react-icons/gi";
import { RiInkBottleFill } from "react-icons/ri";
import { SiAzureartifacts } from "react-icons/si";

// GiShinyApple
// RiInkBottleFill
// GiSlicedBread
// SiAzureartifacts


export default function ItemsCards_TextoCentral() {
   return (
    <>   
      <div>        
        <div class="card-group">
          <div class='row'> 

              <ImagenPrincipalSeccion /> 

              <div class="card bg-dark text-white rounded-0">
                 <h2 class="card-header titulo1-text">VENTA DE PRODUCTOS</h2>
              </div> 
              
              
              <div class="card text-card-padding colorfondocardservicios_agricola border-2 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">

                <div class="card-body">
                    <GiShinyApple size={50}/>

                  <h5 class="mt-3 card-title titulo2-text text-white shadow-text">PRODUCTOS AGRICOLAS</h5>
                  <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                      Frutas Verduras y Cereales: Lechugas, Zanahoria, Papas, Fresas, Manzana, Naranja y otros de produccion local. < br/>                          
                  </p>                                
                </div>                
              </div>

              <div class="card text-card-padding colorfondocardservicios_agricola border-2 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                {/* <img class="card-img-fluid encuadrarimagen" src={fresasyelriego} with='50%' height='50%' alt="Card image cap"/> */}
                <div class="card-body">
                    <RiInkBottleFill size={50}/>
                  <h5 class="mt-3 card-title titulo2-text text-white shadow-text">INSUMOS AGRICOLAS</h5>
                  <p class="card-text titulo4-text shadow-text text-white texto-justificado">              
                      Insecticidas, venenos, fertilizantes, guanos, humus  y aseoramiento tecnico. < br/> 
                  </p>              

                </div>
                
              </div>              

              <div class="card text-card-padding colorfondocardservicios_agricola border-2 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">

                {/* <img class="card-img-fluid encuadrarimagen" src={riegoporgoteo} with='50%' height='50%' alt="Card image cap"/> */}

                <div class="card-body">
                <GiSlicedBread size={50}/>
                  <h5 class="mt-3 card-title titulo2-text text-white shadow-text">ABARROTES</h5>
                  <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                      Lacteos, condimentos, productos envasados, harinas, botanas, confiteria, dulceria, pan, frutas, verduras y bebidas< br/>                         
                  </p>                  

                </div>                
              </div>

              <div class="card text-card-padding colorfondocardservicios_agricola border-2 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-12 col-xl-3">
                {/* <img class="card-img-fluid encuadrarimagen" src={instalacionderiego} with='50%' height='50%' alt="Card image cap"/> */}
                
                <div class="card-body">
                  <SiAzureartifacts size={50}/>
                  <h5 class="mt-3 card-title titulo2-text text-white shadow-text">ARTICULOS DE IMPORTACION</h5>
                  <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                      Maquinaria, artefactos, equipos tecnologicos.< br/>  
                  </p>

                </div>

              </div>
          </div>
        </div>      
      </div>
      </>
      );
    }