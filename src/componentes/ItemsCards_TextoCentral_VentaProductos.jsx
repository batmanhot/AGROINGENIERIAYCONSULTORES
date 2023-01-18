import React from 'react';

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import sembriodefresas from '../imagen/construccion de carreteras.jpg'
import riegoporgoteo from '../imagen/riego-por-goteo-valencia.jpg'
import instalacionderiego from '../imagen/instalacion de riego por goteo.jpg'
import fresasyelriego from '../imagen/fresasyelriegoporgoteo.jpg'
import ImagenPrincipalSeccion from './ItemsCards_ImagenPrincipal_RiegoTecnificado.jsx'

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
              
              
              <div class="card text-card-padding colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">

                <div class="card-body">
                    <GiShinyApple size={50}/>

                  <h5 class="mt-3 card-title titulo2-text text-white shadow-text">PRODUCTOS AGRICOLAS</h5>
                  <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                      Frutas Verduras y Cereales: Lechugas, Zanahoria, Papas, Fresas, Manzana, Naranja y otros de produccion local Huaral . < br/>                          
                  </p>                                
                </div>
                <div class="card-footer">
                    {/* <Button variant="primary">Mas detalles</Button>                     */}
                  </div>              
              </div>

              {/* <div class="card p-4 colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">            
                      <div class="card-body text-card-boxshadow">

                        <GiMineWagon size={50}/>

                        <h5 class="card-title mt-3 titulo2-text shadow-text text-white" >MINERA CARACOL S.A.C</h5>
                        <p class="card-text mt-3 mb-3 titulo4-text shadow-text text-white texto-justificado">
                              Se realizaron trabajos: Poligonal superficial y subterranea para enlazar y ajustar las labores mineras con fines de conexion de labores y explotación minera, ademas de exploraciones.
                              Se realizo poligonales subterraneas por piques, chimeneas, galerias , tajos para proyectar la vetas en los niveles inferiores y superiores.                    
                        </p>
                      </div>              
                    </div> */}



              <div class="card text-card-padding colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                {/* <img class="card-img-fluid encuadrarimagen" src={fresasyelriego} with='50%' height='50%' alt="Card image cap"/> */}
                <div class="card-body">
                    <RiInkBottleFill size={50}/>
                  <h5 class="mt-3 card-title titulo2-text text-white shadow-text">INSUMOS AGRICOLAS</h5>
                  <p class="card-text titulo4-text shadow-text text-white texto-justificado">              
                      Insecticidas, venenos, fertilizantes, guanos, humus  y aseoramiento tecnico. < br/> 
                  </p>              

                </div>
                <div class="card-footer">
                  {/* <Button variant="primary">Mas detalles</Button> */}
                </div>              
              </div>              

              <div class="card text-card-padding colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">

                {/* <img class="card-img-fluid encuadrarimagen" src={riegoporgoteo} with='50%' height='50%' alt="Card image cap"/> */}

                <div class="card-body">
                <GiSlicedBread size={50}/>
                  <h5 class="mt-3 card-title titulo2-text text-white shadow-text">ABARROTES</h5>
                  <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                      Lacteos, condimentos, productos envasados, harinas, botanas, confiteria, dulceria, pan, frutas, verduras y bebidas< br/>                         
                  </p>                  

                </div>
                <div class="card-footer">
                  {/* <Button variant="primary">Mas detalles </Button> */}
                  </div>              
              </div>

              <div class="card text-card-padding colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-12 col-xl-3">
                {/* <img class="card-img-fluid encuadrarimagen" src={instalacionderiego} with='50%' height='50%' alt="Card image cap"/> */}
                
                <div class="card-body">
                  <SiAzureartifacts size={50}/>
                  <h5 class="mt-3 card-title titulo2-text text-white shadow-text">ARTICULOS DE IMPORTACION</h5>
                  <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                      Maquinaria, artefactos, equipos tecnologicos.< br/>  
                  </p>

                </div>

                <div class="card-footer">
                   {/* <Button variant="primary">Mas detalles </Button> */}
                  </div>              
              </div>
          </div>
        </div>      
      </div>
      </>
      );
    }