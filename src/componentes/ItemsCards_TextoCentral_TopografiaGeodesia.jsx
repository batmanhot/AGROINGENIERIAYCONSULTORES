import React from 'react';

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import topsuperficial from '../imagen/TopografiaSuperficial.jpg'
import topsubterranea from '../imagen/topografia minera subterranea.jpg'
import topcondrones from '../imagen/TopografiaconDrones.jpg'
import geodesia from '../imagen/geodesia.jpg'
import ImagenPrincipalSeccion from './ItemsCards_ImagenPrincipal_Topografia.jsx'

import '../css/NuestroServicio.css'
import '../css/imagenprincipal.css'

export default function ItemsCards_TextoCentral() {
   return (
    <>   
      <div>

        <div class="container-fluid"> 

              <div class="card-group">

                <div class='row' >

                      <ImagenPrincipalSeccion /> 

                      <div class="card bg-dark text-white rounded-0">
                        <h2 class="card-header titulo1-text">TOPOGRAFIA, GEODESIA Y CATASTRO</h2>
                      </div>        

                      
                      <div class="card text-card-padding colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <img class="card-img-fluid encuadrarimagen" src={topsuperficial}  with='50%' height='50%' alt="Card image cap"/>
                        <div class="card-body">
                          <h5 class="card-title titulo2-text text-white shadow-text">TOPOGRAFIA SUPERFICIAL</h5>
                          <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                              Poligonales, nivelaciones, levantamiento topográfico a curvas de nivel, parcelas, lotizaciones, replanteos, control de presas de relaves, diques, banquetas, etc.
                          </p>              
                                                    
                        </div>
                        {/* <div class="card-footer">
                        </div>               */}
                      </div>

                      <div class="card text-card-padding colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <img class="card-img-fluid encuadrarimagen" src={topsubterranea} with='50%' height='50%' alt="Card image cap"/>
                        <div class="card-body">
                          <h5 class="card-title titulo2-text text-white shadow-text">TOPOGRAFIA MINERA</h5>
                          <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                            Poligonales, control de proyectos mineros, túneles, labores subterráneas, galerías, tajos, rampas, cruceros, chimeneas, marcado y levantamiento de sondajes diamantinos y línea férrea.
                          </p>                                        
                        </div>
                          {/* <div class="card-footer">
                          </div> */}
                      </div>
                      

                      <div class="card text-card-padding colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">

                        <img class="card-img-fluid encuadrarimagen" src={topcondrones} with='50%' height='50%' alt="Card image cap"/>

                        <div class="card-body">
                          <h5 class="card-title titulo2-text text-white shadow-text">TOPOGRAFIA CON DRONES</h5>
                          <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                            Topografía con Drones	Levantamiento de terrenos con equipos drones para proyectos de gran envergadura y procesamiento de datos.
                          </p>
                        </div>
                          {/* <div class="card-footer">
                          </div>               */}
                      </div>

                        <div class="card text-card-padding colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-12 col-xl-3">
                          <img class="card-img-fluid encuadrarimagen" src={geodesia} with='50%' height='50%' alt="Card image cap"/>
                          <div class="card-body">
                              <h5 class="card-title titulo2-text text-white shadow-text">GEODESIA</h5>
                              <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                                Posicionamiento y procesamiento de puntos geodésicos y poligonales geodésicas, además levantamiento topográfico en modo RTK                
                              </p>                              
                          </div>

                          {/* <div class="card-footer">
                          </div> */}
                        </div>

                 </div>

              </div>
        </div>
      
      </div>
      </>
      );
    }