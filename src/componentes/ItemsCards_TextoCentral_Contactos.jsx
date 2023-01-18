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
                 <h2 class="card-header titulo1-text">CONTACTO</h2>
              </div> 
              
              
              <div class="card text-card-padding colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">

                <div class="card-body">
                    <GiShinyApple size={50}/>

                  <h5 class="mt-3 card-title titulo2-text text-white shadow-text">TELEFONOS</h5>
                  <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                      Frutas Verduras y Cereales: Lechugas, Zanahoria, Papas, Fresas, Manzana, Naranja y otros de produccion local Huaral . < br/>                          
                      CELULAR: 980556159, 949553216
                  </p>                                
                </div>
                <div class="card-footer">
                    {/* <Button variant="primary">Mas detalles</Button>                     */}
                  </div>              
              </div>


              <div class="card text-card-padding colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                {/* <img class="card-img-fluid encuadrarimagen" src={fresasyelriego} with='50%' height='50%' alt="Card image cap"/> */}
                <div class="card-body">
                    <RiInkBottleFill size={50}/>
                  <h5 class="mt-3 card-title titulo2-text text-white shadow-text">CORREOS</h5>
                  <p class="card-text titulo4-text shadow-text text-white texto-justificado">              
                        jblasperu@hotmail.com
                        topblas1@hotmail.com
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
                  <h5 class="mt-3 card-title titulo2-text text-white shadow-text">DIRECCION</h5>
                  <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                      PLAZA DE ARMAS DE AUCALLAMA - HUARAL - LIMA - PERU< br/>                         
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
                  <h5 class="mt-3 card-title titulo2-text text-white shadow-text">UBICACION</h5>
                  <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                      
                      MAPA DE UBICACION< br/>  
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