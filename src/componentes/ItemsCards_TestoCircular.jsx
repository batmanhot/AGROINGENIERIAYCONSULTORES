import React from 'react';

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


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
                Levantamiento topografico e instalacion de tuberias para riego tecnificado por goteo, cultivo y produccion, en los valles Huaral, Huaral y Chancay. Elaboración de planos, instalación de tuberías para riego tecnificado, asesoramiento técnico y preparación de terreno para sembrío.
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
              <h5 class="card-title">SERVICIO DE TOPOGRAFIA, GEODESIA, CATASTRO</h5>
              <p class="card-text">                
                 Empresa peruana formado con vision de negocio, desarrollo, proactividad para cubrir las necesidades de nuestros clientes en los diferentes rubros y servicios que brindamos y de esta forma fomentamos el crecimiento de nuestro pais.
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
                 Es el proceso administrativo de cambiar un terreno rustico o eriazo a urbano, mediante obras de accesibilidad, agua potable, alcantarillado, luz eléctrica; elaborando los documentos o trabajos de ingeniería para cumplir con la normativa establecida. Proyectos y Expedientes Técnicos, Planos de Independización y Lotizaciones.
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
            <img class="rounded-circle border border-5 border-primary" src="https://i.postimg.cc/wjDqYrrc/CONSTRUCCION-CIVIL.jpg" with="50%" height="30%" alt="Card image cap"/> 

            <div class="card-body">
              <h5 class="card-title">CONSTRUCCIONES Y OBRAS CIVILES</h5>
              <p class="card-text">
                 Control de proyectos de obras civiles, carreteras, represas, marcado de eje, replanteos, edificaciones, alcantarillado y otros Servicios de Ingeniería 
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