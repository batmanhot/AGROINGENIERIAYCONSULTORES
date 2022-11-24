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

export default function ItemsCards_TextoCentral() {
   return (
    <>   
      <div>        
        <div class="card-group">
          <div class='row'> 

              <div class="card bg-dark text-white rounded-0">
                 <h2 class="card-header titulo1-text">RIEGO TECNIFICADO Y CULTIVO DE FRESAS</h2>
              </div>   

              <ImagenPrincipalSeccion /> 
              
              <div class="card p-2 colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <img class="card-img-fluid encuadrarimagen" src={sembriodefresas}  with='50%' height='50%' alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title titulo2-text text-white shadow-text">SEMBRIO DE FRESAS</h5>
                  <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                      El cultivo de fresa es uno de los más importantes a nivel global. De hecho, se cultiva en numerosas partes del mundo y constituye una fuente de ingresos para muchas empresas agrícolas. < br/> 
                      En los últimos veinte años la producción de fresa a nivel mundial ha aumentado de un 83%. < br/>  
                      Los principales países productores son Estados Unidos, Turquía y España seguidos de México, Corea, Egipto y también de Italia que con juntamente componen más del 50% de la producción mundial.< br/> 
                      La fresa es una planta perenne con la tendencia a la ramificación y un crecimiento arbustivo.                  
                  </p>                                
                </div>
                <div class="card-footer">
                    <Button variant="primary">Mas detalles</Button>                    
                  </div>              
              </div>

              <div class="card p-2 colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <img class="card-img-fluid encuadrarimagen" src={fresasyelriego} with='50%' height='50%' alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title titulo2-text text-white shadow-text">LAS FRESAS Y EL RIEGO POR GOTEO</h5>
                  <p class="card-text titulo4-text shadow-text text-white texto-justificado">              
                      La  fresa es una planta que sufre mucho el estrés hídrico que provoca escaso desarrollo del sistema radicular y de consecuencia, un bajo rendimiento. < br/>  
                      Por esta razón es importante manejar cuidadosamente la cantidad de agua en el terreno, o sustrato que se utilice, optando por técnicas de riego adecuadas. < br/>  
                      Actualmente, uno de los mejores y más usados sistemas de riego es la micro irrigación por goteo. < br/>  
                      Este sistema permite de gestionar y controlar los suministros de agua maximizando el rendimiento y reducir las ineficiencias. < br/>  
                      La baja precipitación permite de gestionar con cuidado la profundidad de humectación de cada operación.
                  </p>              

                </div>
                <div class="card-footer">
                  <Button variant="primary">Mas detalles</Button>
                </div>              
              </div>              

              <div class="card p-2 colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">

                <img class="card-img-fluid encuadrarimagen" src={riegoporgoteo} with='50%' height='50%' alt="Card image cap"/>

                <div class="card-body">
                  <h5 class="card-title titulo2-text text-white shadow-text">MAYOR RENDIMIENTO Y CALIDAD DE LA FRESA CON EL RIEGO POR GOTEO</h5>
                  <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                      Un  experimento realizado en una plantación bienal (2016-2017) en cultivo “Honeoye” ha demostrado como puede variar el rendimiento y la calidad de los frutos entre dos cultivos regados con y sin sistema de riego.< br/>                
                      En los estudios de comparaciones se evidencia cuanto el riego influye en el crecimiento vegetativo del fruto. < br/>  
                      Los rendimientos con el riego por goteo son netamente superiores a los no regados, además que afecta considerablemente también el numero de frutos por planta asi como tambien la calidad de estos. < br/>  
                      Esta tecnica es bastante difundida y de mayor exito.
                  </p>                  

                </div>
                <div class="card-footer">
                  <Button variant="primary">Mas detalles </Button>
                  </div>              
              </div>

              <div class="card p-2 colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-12 col-xl-3">
                <img class="card-img-fluid encuadrarimagen" src={instalacionderiego} with='50%' height='50%' alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title titulo2-text text-white shadow-text">INSTALACIÓN DE RIEGO POR GOTEO</h5>
                  <p class="card-text titulo4-text shadow-text text-white texto-justificado">
                      La instalación de riego está compuesta por goteros autocompensantes con sistema drop stop.< br/>  
                      El caudal de cada uno de estos dispositivos se reparte a través de unos adaptadores manifold que, debido a tubos capilares y estacas de soporte, aportarán a la planta, directamente en el sustrato inerte, el caudal de la solución nutritiva necesaria.< br/>                         
                      La función drop stop es fundamental para esta aplicación, ya que, evitando el vaciado de las tuberías lo que permite aplicar pequeños ciclos de riego (max tres por minutos) y cumplir completamente la prerrogativa de uniformidad y eficiencia de riego.                       
                  </p>

                  {/* La compensación del caudal del gotero permite además de regular caudales distribuir los fertilizantes de manera uniforme a todos los puntos de goteo de la instalación.                   
                  Estas dos peculiaridades de los goteros son imprescindibles si se quiere regar la f resa fuera del suelo de manera correcta. */}
                  {/* de una instalación de riego por goteo moderna. */}

                </div>

                <div class="card-footer">
                   <Button variant="primary">Mas detalles </Button>
                  </div>              
              </div>
          </div>
        </div>      
      </div>
      </>
      );
    }