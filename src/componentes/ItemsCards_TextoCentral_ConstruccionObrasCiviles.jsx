import React from 'react';

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import edificaciones from '../imagen/edificaciones.jpg'
import controldeproyectos from '../imagen/control de proyectos de obrsa civiles.jpg'
import carreteras from '../imagen/construccion de carreteras.jpg'
import canalesacueductos from '../imagen/construccion de canales y acueductos.jpg'

import ImagenPrincipalSeccion from './ItemsCards_ImagenPrincipal_ConstruccionCivil.jsx'

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
                 <h2 class="card-header titulo1-text">CONSTRUCCIONES Y OBRAS CIVILES</h2>
             </div>    

                 <ImagenPrincipalSeccion /> 

                 
                 {/* colorfondocardservicios_agricola */}
                <div class="card p-4 colorfondocardservicios_construccioncivil border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <img class="card-img-fluid encuadrarimagen" src={controldeproyectos}  with='50%' height='50%' alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title titulo2-text text-white shadow-text">CONTROL DE PROYECTOS DE OBRAS CIVILES</h5>
                    <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                      El control de proyectos es una necesidad que se ha generado debido a las grandes cantidades de recursos que se implementan para poder ejecutarlos, debido a las posibles desviaciones en los presupuestos nace la necesidad de crear un plan de control y seguimiento en la ejecución de proyectos, más específicamente en la ejecución de obras civiles de Grandes superficies con el objetivo de poder controlar el desvío y la mala utilización de recursos implementados para el desarrollo de los mismos
                    </p>              
                                  
                  </div>
                  <div class="card-footer">
                      <Button variant="primary">Mas detalles</Button>  
                    </div>              
                </div>

                <div class="card p-4 colorfondocardservicios_construccioncivil border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <img class="card-img-fluid encuadrarimagen" src={carreteras} with='50%' height='50%' alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title titulo2-text text-white shadow-text">CONSTRUCCION DE CARRETERAS</h5>
                    <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                      Con el crecimiento de la población mundial se incrementa también la necesidad de infraestructuras. <br />
                      Para dar respuesta a los requisitos del tráfico y el transporte modernos, se necesitan fundamentalmente unas superficies para el tráfico duraderas y seguras que se realicen de la forma más rentable y ecológica posible. <br />
                      La construcción de carreteras y caminos es necesaria debido a que los suelos formados de manera natural son inadecuados como superficie para el tráfico y no pueden cumplir los crecientes requisitos del transporte de personas y mercancías.
                    </p>              

                  </div>
                  <div class="card-footer">
                      <Button variant="primary">Mas detalles</Button>
                  </div>              
                </div>
                

                <div class="card p-4 colorfondocardservicios_construccioncivil border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 ">

                  <img class="card-img-fluid encuadrarimagen" src={edificaciones} with='50%' height='50%' alt="Card image cap"/>

                  <div class="card-body">
                    <h5 class="card-title titulo2-text text-white shadow-text">EDIFICACIONES</h5>
                    <p class="card-text titulo4-text shadow-text text-white texto-justificado">                  
                        La edificación se refiere a la construcción de edificios e inmuebles para el resguardo del ser humano.<br />
                        El ejemplo de edificación más evidente es de las viviendas, las casas en las que habitamos. <br />
                        Pero en el grupo de edificaciones también entran otras construcciones como los centros comerciales, las iglesias, los edificios de oficinas o los teatros. <br />
                        Asi tambien estamos en capacidad de participar en licitaciones.<br />
                        Realmente nos encargamos de todas las fases de una obra ofreciendo soluciones integrales de construcción, contacta con nosotros para cualquier duda que tengas.
                    </p>
                    
                  </div>
                  <div class="card-footer">
                      <Button variant="primary">Mas detalles</Button>
                    </div>              
                </div>
                {/* p-2 colorfondocardservicios_agricola */}
                <div class="card p-4 colorfondocardservicios_construccioncivil  border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-12 col-xl-3">
                  <img class="card-img-fluid encuadrarimagen" src={canalesacueductos} with='50%' height='50%' alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title titulo2-text text-white shadow-text">CANALES DE IRRIGACION</h5>
                    <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                        Los canales de riego tienen la función de conducir el agua desde la captación hasta el campo o huerta donde será aplicado a los cultivos. <br />
                        Son obras de ingeniería importantes, que deben ser cuidadosamente pensadas para no provocar daños al ambiente y para que se gaste la menor cantidad de agua posible. <br />
                        Están estrechamente vinculados a las características del terreno, generalmente siguen aproximadamente las curvas de nivel de este, descendiendo suavemente hacia cotas más bajas (dándole una pendiente descendente, para que el agua fluya más rápidamente).
                    </p>                             

                  </div>

                    <div class="card-footer">
                      <Button variant="primary">Mas detalles </Button>
                    </div>              
                  </div>

            </div>
          </div>      
        </div>
      </div>
      </>
      );
    }