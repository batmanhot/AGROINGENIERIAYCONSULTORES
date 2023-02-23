import React from 'react';

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import habilitacionurbana from '../imagen/HabilitacionUrbana.jpg'
import planoslotizaciones from '../imagen/PlanosLotizaciones.jpg'
import ImagenPrincipalSeccion from './ItemsCards_ImagenPrincipal_HabilitacionUrbana.jsx'

import '../css/NuestroServicio.css'
import '../css/imagenprincipal.css'

export default function ItemsCards_IngenieriaAgricola() {
   return (
    <>          
         <div class="container-fluid">
    
          <div class="card-group">

            <div class='row' >       

            <ImagenPrincipalSeccion /> 
            
            <div class="card bg-dark text-white rounded-0">
               <h2 class="card-header titulo1-text">HABILITACION URBANA Y CATASTRO</h2>
            </div>   

              {/* --1 */}

              <div className="card text-card-padding colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">                
                {/* <img className="card-img-fluid encuadrarimagen" src={Agronoma}  with='50%' height='50%' alt="Card image cap"/> */}
                <div className="card-body">
                  <h5 className="card-title titulo2-text text-white shadow-text"></h5>            
                  <p className="card-text titulo4-text shadow-text text-white texto-justificado">                  
                      {/* La ingeniería agrícola es aquella en la que se aplica la ciencia y tecnología en los ámbitos de las explotaciones relacionadas con la agricultura, tanto extensivas como intensivas, la industria agroalimentaria, el desarrollo de maquinaria, motores y tecnología agrícola, la jardinería y el paisajismo, procurando las mejores condiciones sociales, económicas, ecológicas, cuidado del medio ambiente y sobre todo apuntando a la alta produccion de productos y riqueza del suelo. */}
                  </p> 
                  
                </div>
              </div>

              {/* --2 */}
              <div className="card text-card-padding colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <img id="servicios-icono-efecto" className="card-img-fluid encuadrarimagen" src={habilitacionurbana} with='50%' height='50%' alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title titulo2-text text-white shadow-text">PLANOS DE LOTIZACION UBICACION y PERIMETRICO</h5>
                  
                  <p className="card-text titulo4-text shadow-text text-white texto-justificado">
                      Elaboración de planos de lotización que contienen la división en lotes de un terreno cualquiera, diseñado por los profesionales ingenieros civiles y arquitectos cumpliendo las normas técnicas que las regula. <br />
                      Además, los planos perimétricos y de ubicación muy importante para los trámites de inscripción y regularización de predios. <br />                                      
                  </p>                            
                </div>
              </div>
              
              {/* --3 */}

              <div className="card text-card-padding colorfondocardservicios_agricola border-0 rounded-0  col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">

                <img id="servicios-icono-efecto" className="card-img-fluid encuadrarimagen" src={planoslotizaciones} with='50%' height='50%' alt="Card image cap"/>

                <div className="card-body">
                  <h5 className="card-title titulo2-text shadow-text text-white">LOTIZACIONES Y HABILITACION URBANA</h5>
                  <p className="card-text titulo4-text shadow-text text-white texto-justificado">              
                      Levantamiento Topográfico de Terrenos y Elaboración de Proyectos y Expedientes Técnicos, Planos de Independización, Lotizaciones, Perimétricos, Localización y Ubicación. <br />
                      Además, el trazo y replanteo de linderos o proyecto según los planos o requerimiento.<br />
                      Contamos con profesionales experimentados que les brindara asesoramiento y orientación para gestionar los tramites que el cliente necesita                      
                  </p>
                </div>
              </div>

              {/* --4 */}

              <div className="card text-card-padding colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-12 col-xl-3">
                {/* <img className="card-img-fluid encuadrarimagen" src={maiz} with='50%' height='50%' alt="Card image cap"/> */}
                <div className="card-body">
                  <h5 className="card-title titulo2-text shadow-text text-white"></h5>
                  <p className="card-text titulo4-text shadow-text text-white texto-justificado">
                      {/* Le acompañamos y asesoramos en todo el proceso productivo para que su negocio logre alcanzar los certificados de exportación para llegar a los mercados internacionales. <br />
                      De todas las cosas necesarias para cultivar árboles frutales, o cualquier otra cosa, para el caso, el suelo es quizás uno de los más pasados ​​​​por alto y menospreciados. <br />
                      El suelo juega un papel fundamental en la salud y la cantidad de frutos que producirán. */}
                  </p>              
                </div>

              </div>
            </div>    
          </div> 
        </div>
      </>
      );
    }

    // Imagen de <a href="https://pixabay.com/es/users/mwitt1337-889520/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2284501">Malachi Witt</a> en <a href="https://pixabay.com/es//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2284501">Pixabay</a>