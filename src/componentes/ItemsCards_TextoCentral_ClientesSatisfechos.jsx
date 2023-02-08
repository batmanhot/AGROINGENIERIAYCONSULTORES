
import React from 'react';

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { GiMineWagon } from "react-icons/gi";
import { MdAgriculture } from "react-icons/md";
import { GrServices } from "react-icons/gr";

import '../css/NuestroServicio.css'
import '../css/imagenprincipal.css'

export default function ItemsCards_TextoCentral() {
   return (
    <>   
      <div>        
          <div class="container-fluid">        
            <div class="card-group">
              <div class='row' >    
                  <div class="card bg-dark text-white rounded-0">
                        <h2 class="card-header titulo1-text">CLIENTES SATISFECHOS</h2>
                  </div> 
                    
                    <div class="card p-4 colorfondocardservicios_agricola border-2 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">            
                      <div class="card-body">
                      {/* text-card-boxshadow */}

                        <GiMineWagon size={60}/>

                        <h5 class="card-title mt-3 titulo2-text shadow-text text-white" >MINERA CARACOL S.A.C</h5>
                        <p class="card-text mt-3 mb-3 titulo4-text shadow-text text-white texto-justificado">
                              Se realizó trabajos de topografía superficial y minera, con la finalidad de enlazar y ajustar las labores subterráneas entre sí, para comunicar las labores de diferentes niveles y continuar su explotación según el diseño de Ingeniería y Geología. <br/>
                              Se realizó mediante poligonales subterráneas por piques, chimeneas, galerías y tajos para proyectar las vetas en los niveles inferiores y superiores, por consiguiente; el área de Ingeniería elabore los diseños de minado.
                        </p>
                      </div>              
                    </div>

                    <div class="card p-4 colorfondocardservicios_agricola border-2 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                      <div class="card-body">
                      {/* text-card-boxshadow */}
                        <MdAgriculture size={60}/>
                        <h5 class="card-title mt-3 titulo2-text shadow-text text-white">AGRICOLA TAMBILLO SRL</h5>
                        <p class="card-text mt-3 mb-3 titulo4-text shadow-text text-white texto-justificado">

                        Levantamiento topográfico de parcelas y elaboración de planos y diseño para riego tecnificado por goteo en el cultivo de fresas. <br/>
                        El diseño y plano de distribución de la red de agua y área de sembrío, muy importante para que el caudal y presión del H2O sea uniforme, al aplicar la Ingeniería en el riego tecnificado permite una mejor fertilización, riego, humedad, control de plagas y malezas y como resultado final, calidad de producto. 
                        </p>              
                      </div>              
                    </div>
                    
                    <div class="card p-4 colorfondocardservicios_agricola border-2 rounded-0 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">          
                      <div class="card-body">

                       {/* text-card-boxshadow */}
                        <GrServices size={60}/>
                        <h5 class="card-title mt-3 titulo2-text shadow-text text-white">FAM HOLDING PERU SAC.</h5>
                        <p class="card-text mt-3 mb-3 titulo4-text shadow-text text-white texto-justificado">              
                          Replanteo de ejes y perímetro  para la instalación de módulos de cortes en almacén metal mecánica, montajes de estructuras metálicas.
                        </p>
                      </div>             
                    </div>

                    {/* <div class="card p-2 colorfondocardservicios_agricola border-2 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">     
                      <div class="card-body">
                        <GiMineWagon size={48}/>
                        <h5 class="card-title mt-3 titulo2-text shadow-text text-white">ASESORÍA TÉCNICA EN PRODUCCIÓN DE CULTIVOS FRUTALES</h5>
                        <p class="card-text titulo4-text shadow-text text-white">
                            Le acompañamos y asesoramos en todo el proceso productivo para que su negocio logre alcanzar los certificados de exportación para llegar a los mercados internacionales.
                            De todas las cosas necesarias para cultivar árboles frutales, o cualquier otra cosa, para el caso, el suelo es quizás uno de los más pasados ​​​​por alto y menospreciados. El suelo juega un papel fundamental en la salud y la cantidad de frutos que producirán.
                        </p> 
                      </div> 
                    </div> */}
              </div>
            </div>      
            </div>
          </div>
      </>
      );
    }