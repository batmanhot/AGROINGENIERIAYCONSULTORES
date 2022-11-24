import React from 'react';

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import maiz1 from '../imagen/maiz1.jpg'

export default function ItemsCards_TextoCircular() {
   return (
    <>   
      <div>
        <div class="card-group">

          {/* ----1  */}
          <div class="card p-2">
           {/* <img class="rounded-circle border border-5 border-primary" src="https://cdn.pixabay.com/photo/2018/06/21/13/57/clouds-3488632__340.jpg" with='1rem' alt="Card image cap"/> */}
           <img class="rounded-circle border border-5 border-primary" src="https://i.postimg.cc/4xP74R77/Agronomia-cultivo-riegotecnificado.jpg" with="50%" height="30%" alt="Card image cap"/>                       
           
            <div class="card-body">
              <h5 class="card-title">SERVICIO DE INGENIERIA AGRICOLA</h5>
              <p class="card-text">
                Asesoramiento y Soporte tecnico en injertos, tuberculos, cultivos de frutas y verduras, asimismo papa, fresas, naranjas, manzana, mandarina, lechugas y zanahorias.
              </p>              

              <a href="#" class="card-link">Link al Grupo de Noticias</a>
              
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>              
          </div>

          {/* ----2  */}
          <div class="card p-2">
           <img class="rounded-circle border border-5 border-primary" src="https://i.postimg.cc/50DgGWqG/Riego-Tecnificado1.jpg" with="50%" height="30%" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">RIEGO TECNIFICADO</h5>
              <p class="card-text">
                Levantamiento topografico e instalacion de tuberias para riego tecnificado por goteo, cultivo y produccion, en los valles Huaral, Huaral y Chancay.
              </p>                            

              <a href="#" class="card-link">Link al Grupo de Noticias</a>
              
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>              
          </div>

          {/* ----3  */}
          <div class="card p-2">
            <img class="rounded-circle border border-5 border-primary" src="https://i.postimg.cc/505vdQVv/Topografia-Superficial.jpg" with="50%" height="30%" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">TOPOGRAFIA, GEODESIA, CATASTRO, CONSTRUCCION</h5>
              <p class="card-text">                
                 Los estudios topográficos son de gran importancia para la realización de cualquier tipo de obra que se vaya a ejecutar en una determinada parcela o terreno. A través de estos estudios se pueden obtener datos precisos de ubicación y georeferenciación por medio de coordenadas que indican la longitud, la latitud y hasta la elevación o cota de cualquier punto u objeto de la superficie terrestre
                 Procesamiento y posicionamiento de puntos geodesicos y levantamiento en modo RTK
              </p>              
              
              <a href="#" class="card-link">Link al Grupo de Noticias</a>
              
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>              
          </div>



          {/* ---- 4  */}
          <div class="card p-2">

            <img class="rounded-circle border border-5 border-primary" src="https://i.postimg.cc/MHkVfk77/HABILITACION-URBANA1.jpg" with="50%" height="30%" alt="Card image cap"/>

            <div class="card-body">
              <h5 class="card-title">HABILITACION URBANA</h5>
              <p class="card-text">                 
                 Es el procedimiento de transformar un terreno rústico a urbano se le llama ‘habilitación urbana’. Para el Ministerio de Vivienda, Construcción y Saneamiento, los predios de una zona urbana deben contar con servicios básicos como agua, luz, desagüe y también con servicios domiciliarios como pistas, veredas e infraestructura vial.                  
              </p>
              
              <a href="#" class="card-link">Link al Grupo de Noticias</a>

            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>              
          </div>

          {/* ----5  */}
          <div class="card p-2">
            {/* <img class="rounded-circle border border-5 border-primary" src="https://cdn.pixabay.com/photo/2018/06/21/13/57/clouds-3488632__340.jpg" with='1rem' alt="Card image cap"/> */}
            <img class="rounded-circle border border-5 border-primary" src="https://i.postimg.cc/SRs3yRLT/metalmecanica.jpg" with="50%" height="30%" alt="Card image cap"/> 

            <div class="card-body">
              <h5 class="card-title">ESPECIALISTAS EN ING CIVIL , MINERIA Y AGRICULTURA</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora aut voluptas quidem magni labore non eaque esse ut ipsum repudiandae assumenda nobis veritatis eveniet, mollitia asperiores iusto, voluptate nesciunt alias.                
              </p>              

              <a href="#" class="card-link">Link al Grupo de Noticias</a>

            </div>

            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>              
            </div>
          </div>                

      </div>
      </>
      );
    }