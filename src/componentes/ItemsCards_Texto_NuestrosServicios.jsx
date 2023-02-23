import React from 'react';
import { Link } from 'react-router-dom';
import { MdAgriculture, MdConstruction } from  'react-icons/md'
import { BsFillDropletFill } from  'react-icons/bs'
import { GiPencilRuler } from  'react-icons/gi'
import { AiTwotoneContainer } from  'react-icons/ai'

import imagen1 from  '../imagen/Agronomia-cultivo-riegotecnificado.jpg'
import imagen2 from  '../imagen/Riego-Tecnificado1.jpg'
import imagen3 from  '../imagen/Topografia-Superficial.jpg'
import imagen4 from  '../imagen/HABILITACION-URBANA1.jpg'
import imagen5 from  '../imagen/CONSTRUCCION-CIVIL.jpg'

import '../css/NuestroServicio.css'
import '../css/imagenprincipal.css'


export default function ItemsCards_TextoCircular() {
   return (
    <>         
      <div class="container-fluid">                  

        {/* /* Medidas de BreakPoint para el uso en col bootstrap
        Breakpoint	Class infix	Dimensions
        X-Small	None	        <576px
        Small	sm	            ≥576px
        Medium md	            ≥768px
        Large	lg       	      ≥992px
        Extra large	xl	      ≥1200px
        Extra extra large	xxl	≥1400px
        */ }

        <div class="card-group"> 

          {/* ----1  */}
          <div class='row'>
              <div class="card bg-dark text-white rounded-0">
                <h2 class="card-header titulo1-text">NUESTROS SERVICIOS</h2>
              </div>

              <div class="order-3 card p-2 colorfondocard text-white border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              
              <img class="img-fluid redondearimagen border border-dark sombraiconoservicios" src={imagen1} alt="Card image cap"/>
              
                <div class="card-body ColorFondoCard">
                  <h5 class="card-title shadow-lg p-3 mb-5 rounded shadow-text titulo2-text">INGENIERIA AGRICOLA</h5>
                  <p class="card-text titulo4-text shadow-text texto-justificado ">
                     {/* Asesoramiento y Soporte tecnico en injertos, tuberculos, cultivos de frutas y verduras, asimismo papa, fresas, naranjas, manzana, mandarina, lechugas y zanahorias. */}
                     Asesoramiento y soporte técnico en el cultivo de fresas, tubérculos, frutas y verduras, además injertos de plantaciones y lo relacionado al agro.
                  </p>
                </div>
                <div class="card-footer text-primary  ">                                        
                    <Link className="nav-link demo-text text-white pl-3" to='/IngenieriaAgricola'><MdAgriculture size= {'2rem'}/> Ver mas </Link> 
                    {/* <a href="/" class="card-link demo-text">Ver mas</a> */}
                  </div>              
              </div>

              {/* ----2  */}              
              <div class="order-4 card p-2 colorfondocard text-white border-0 rounded-0 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <img class="img-fluid redondearimagen border border-dark sombraiconoservicios" src={imagen2} with="50%" height="30%" alt="Card image cap"/>
                  
                  <div class="card-body">
                    <h5 class="card-title shadow-lg p-3 mb-5 rounded shadow-text titulo2-text">RIEGO TECNIFICADO EN EL SEMBRIO</h5>
                    <p class="card-text titulo4-text shadow-text texto-justificado">
                      {/* Levantamiento topografico e instalacion de tuberias para riego tecnificado por goteo, cultivo y produccion, en los valles Huaral, Huaral y Chancay. <br/>
                      Elaboración de planos, instalación de tuberías para riego tecnificado, asesoramiento técnico y preparación de terreno para sembrío. */}

                      Asesoramiento técnico, Levantamiento topográfico de parcelas y elaboración de planos, diseño e instalación de tuberías para riego tecnificado por goteo, preparación del terreno para sembrío, cultivo y producción de fresas. 

                    </p>                              
                  </div>
                  <div class="card-footer">
                    <Link className="nav-link demo-text text-white pl-2" to='/RiegoTecnificadoFresas'><BsFillDropletFill size= {'2rem'}/> Ver mas </Link> 
                    {/* <a href="#" class="card-link">Link al Grupo de Noticias</a> */}
                  </div>              
              </div>

              {/* ----3  */}
              <div class="order-1 card p-2 colorfondocard text-white border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">                
                <img class="img-fluid redondearimagen border border-dark sombraiconoservicios" src={imagen3} with="50%" height="30%" alt="Card image cap"/>                

                <div class="card-body">
                  <h5 class="card-title shadow-lg p-3 mb-5 rounded shadow-text titulo2-text">TOPOGRAFIA, GEODESIA</h5>
                  <p class="card-text titulo4-text shadow-text texto-justificado">                
                    {/* Empresa peruana formado con vision de negocio, desarrollo, proactividad para cubrir las necesidades de nuestros clientes en los diferentes rubros y servicios que brindamos y de esta forma fomentamos el crecimiento de nuestro pais. */}
                    {/* La topografía es importante para todos los proyectos de ingeniería y arquitectura, nuestros profesionales están capacitados y preparados para realizar un trabajo de precisión y calidad. */}
                    Somos especialistas en topografía subterránea y a tajo abierto, montaje de estructuras, peritaje topográfico, topografía ferroviaria, topografía con drones y geodesia, desarrollando una serie de trabajos: levantamiento topográfico, poligonales, gradientes, dirección y control de proyectos de labores mineras, 
                    marcado de sondajes diamantinos, replanteos perimétrico de propiedades, denuncios, parcelas, control de taludes, accesos, banquetas, cubicaciones de movimiento de tierra, posicionamiento de puntos geodésicos y mediciones en modo RTK, control de proyectos de línea férrea para el tránsito de trenes y locomotoras en minería subterránea, nivelación y trazo de carreteras, alcantarillado y canales de regadío. 
                  </p>
                </div>
                 <div class="card-footer">
                    <Link className="nav-link demo-text text-white pl-2" to='/TopografiaGeodesia'><GiPencilRuler size= {'2rem'}/> Ver mas </Link> 
                    {/* <a href="#" class="card-link">Link al Grupo de Noticias</a> */}
                  </div>              
                </div>                              

                {/* ---- 4  */}                                
                <div class="order-2 card p-2 colorfondocard text-white border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">                  
                  <img class="img-fluid redondearimagen border border-dark sombraiconoservicios" src= {imagen4} with="50%" height="30%" alt="Card image cap"/>                  
                  <div class="card-body">
                    <h5 class="card-title shadow-lg p-3 mb-5 rounded shadow-text titulo2-text">HABILITACION URBANA Y CATASTRO</h5>
                    <p class="card-text titulo4-text shadow-text texto-justificado">                                  
                      Es el proceso administrativo de cambiar un terreno rustico o eriazo a urbano, mediante obras de accesibilidad, agua potable, alcantarillado, luz eléctrica; elaborando los documentos o trabajos de ingeniería para cumplir con la normativa establecida. <br/>
                      Proyectos y Expedientes Técnicos, Planos de Independización y Lotizaciones.
                      Tiene como propósito principal la ubicación, regularización y registro de bienes inmuebles de uso múltiple
                    </p>                    
                  </div>

                  <div class="card-footer">
                      {/* <a href="#" class="card-link">Link al Grupo de Noticias</a> */}
                      <Link className="nav-link demo-text text-white pl-2" to='/HabilitacionUrbana'><AiTwotoneContainer size= {'2rem'}/> Ver mas </Link>                       
                  </div>              
                </div>

                {/* ----5  */}     
                <div class="order-5 card p-2 colorfondocard text-white border-0 rounded-0 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">                  
                  <img class="img-fluid redondearimagen border border-dark sombraiconoservicios" src={imagen5} with="50%" height="30%" alt="Card image cap"/>                  

                  <div class="card-body">
                    <h5 class="card-title shadow-lg p-3 mb-5 rounded shadow-text titulo2-text">CONSTRUCCIONES Y OBRAS CIVILES</h5>
                    <p class="card-text titulo4-text shadow-text texto-justificado">
                      Control de proyectos de obras civiles, carreteras, represas, marcado de eje, replanteos, edificaciones, alcantarillado y otros Servicios de Ingeniería.
                    </p>                            
                  </div>
                  <div class="card-footer">
                      <Link className="nav-link demo-text text-white pl-2" to='/ConstruccionObrasCiviles'><MdConstruction size= {'2rem'}/> Ver mas </Link> 
                      {/* <a href="#" class="card-link">Link al Grupo de Noticias</a>                       */}
                    </div>              
                  </div>
                </div>                

          </div>
      </div>
      </>
      );
    }