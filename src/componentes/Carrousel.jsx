import Carousel from 'react-bootstrap/Carousel';

import sembriodefresa  from '../imagen/Topografia_subterranea.jpg'
import produccion  from '../imagen/Topografia_Drones.JPG'
import agronoma  from '../imagen/Fresas_Carrousel.JPG'
import edificaciones  from '../imagen/geodesia.jpg'

import riegoporgoteo from '../imagen/corte segun diseño para instalar tuberia_Carrousel.jpg'
import topografia  from '../imagen/replanteo para riego tecnificado_Carrousel.jpg'
import pistas  from '../imagen/Pistas_Carrousel.jpeg'

import '../css/carrousel.css'
import '../css/NuestroServicio.css'
import '../css/imagenprincipal.css'

function IndividualIntervalsExample() {
  return (
    <div class="row bg-dark">
      <center>
        <Carousel>
          <Carousel.Item interval={500}>
            <img
            id="imagen-carrousel"
            //  <div className='margin-0 d-flex justify-content-center align-items-center bg-info  border border-3 col-xs-12 col-sm-12 col-md-10 col-lg-8 col-xl-8'> 
              className="img-fluid border border-3"          
              src = {sembriodefresa}
              alt="First slide"                    
            />
            <Carousel.Caption>
              <p class="demo-carousel fs-4">CONTROL Y LEVANTAMIENTO TOPOGRAFICO SUBTERRANEO</p>
              <p class="demo-carousel fs-5">TOPOGRAFIA MINERA</p>              
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              id="imagen-carrousel"
              className="border border-3"
              src={produccion}
              sembriodefresa 
              alt="Second slide"          
            />
            <Carousel.Caption>          
              <p class="demo-carousel fs-4">LEVANTAMIENTO TOPOGRÁFICO CON EQUIPOS DRONES</p>
              <p class="demo-carousel fs-5">TOPOGRAFIA CON DRONES</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              id="imagen-carrousel"
              className="border border-3 col-xs-12 col-sm-12 col-md-10 col-lg-7 col-xl-7"
              src = {agronoma}
              alt="Third slide"                    
            />
            <Carousel.Caption>
              <p class="demo-carousel fs-4">ASESORAMIENTO TÉCNICO EN EL CULTIVO Y PRODUCCION DE FRESAS</p>
              <p class="demo-carousel fs-5"> SERVICIO DE INGENIERIA AGRICOLA</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              id="imagen-carrousel"
              className="border border-3"              
              src = {edificaciones}
              alt="Four slide"
            />
            <Carousel.Caption>
              <p class="demo-carousel fs-4">PUNTOS GEODESICOS</p>
              <p class="demo-carousel fs-5">GEODESIA</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              id="imagen-carrousel"
              className="border border-3"
              src = {riegoporgoteo}
              alt="Four slide"
            />
            <Carousel.Caption>
              <p class="demo-carousel fs-4">TRAZO e INSTALACIONES PARA RIEGO POR GOTEO</p>
              <p class="demo-carousel fs-5">SERVICIO Y ASESORIA TECNICA PARA RIEGO TECNIFICADO</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              id="imagen-carrousel"
              className="border border-3"          
              src = {topografia}
              alt="Four slide"
            />
        
            <Carousel.Caption>
              <p class="demo-carousel fs-4">LEVANTAMIENTO TOPOGRAFICO DE PARCELAS</p>
              <p class="demo-carousel fs-5">TOPOGRAFIA SUPERFICIAL</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              id="imagen-carrousel"
              className="border border-3"          
              src = {pistas}
              alt="Four slide"
            />            
            <Carousel.Caption>
              <p class="demo-carousel fs-4">TRAZO Y REPLANTEO DE CARRETERAS</p>
              <p class="demo-carousel fs-5">TOPOGRAFIA SUPERFICIAL</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
    </center>
    </div>
  );
}
export default IndividualIntervalsExample;

