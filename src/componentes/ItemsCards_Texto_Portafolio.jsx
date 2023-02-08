import React from 'react';
import { Link } from 'react-router-dom';
import { MdAgriculture, MdConstruction } from  'react-icons/md'
import { BsFillDropletFill } from  'react-icons/bs'
import { GiPencilRuler } from  'react-icons/gi'
import { AiTwotoneContainer } from  'react-icons/ai'
import ImagenPrincipalSeccion from './ItemsCards_ImagenPrincipal_Portafolio.jsx'

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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

              <ImagenPrincipalSeccion /> 

              <div class="card bg-dark text-white rounded-0">
                <h2 class="card-header titulo1-text">NUESTRAS EXPERIENCIAS</h2>
              </div>
              {/* colorfondocardservicios_portafolio */}
              <div class="card p-3 colorfondocardservicios_portafolio text-white border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">              
                <div class="card-body text-card-boxshadow">                    
                {/* shadow-lg */}
                {/* ColorFondoCard */}
                  <h5 class="card-title p-1 rounded shadow-text titulo1-text">2012</h5>
                  <p class="card-text titulo4-text shadow-text texto-justificado">
                      - Topografía Minera,  Poligonales subterráneas y superficiales (triangulación, nivelación , estación libre) y levantamiento topográficos de labores subterráneas: piques, chimeneas, galerías, tajos, sub niveles, cruceros y control de proyectos mineros (gradientes, dirección) y replanteos.
                      MINERA CARACOL SAC / BARRANCA  <br/><br/>

                      

	      		          - Levantamiento Topográfico Catastral Urbano, Toma de datos y levantamiento topográfico de viviendas, calles, alumbrado público y otros detalles técnicos que se representan en el plano y su aprobación en el sector competente.
                      CENTRO POBLADO TAMBILLO / AUCALLAMA <br/><br/>

                      - Levantamiento Topográfico de Parcelas, Toma de datos, procesamiento y replanteo del proyecto para la instalación del riego tecnificado en el cultivo de fresas. 
                      AGRICOLA TAMBILLO SRL / HUARAL, HUACHO, CANTA <br/><br/>
                  </p>
                </div>
              </div> 

              {/* ----2  */}
              <div class="card p-3 colorfondocardservicios_portafolio text-white border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                  <div class="card-body text-card-boxshadow">
                    <h5 class="card-title p-1 rounded shadow-text titulo1-text">2019</h5>
                    <p class="card-text titulo4-text shadow-text texto-justificado">
                       - Topografía en Edificaciones y replanteo de ejes y perímetro  para la instalación de módulos de cortes en almacén metal mecánica, montajes de estructurar metálicas. 
                       FAM HOLDING PERU S.A.C. / LIMA <br/><br/>
                           
			                 - Lotizaciones y Habilitación Urbana, levantamiento Topográfico de Terrenos y Elaboración de Proyectos y Expedientes Técnicos, Planos de Independización, Lotizaciones, Perimétricos, Asesoramiento y Trámites Administrativos.
                       ASOCIACION DE POBLADORES VALLE VERDE – AUCALLAMA – HUARAL <br/><br/>                      
                    </p>                              
                  </div>
                  
              </div>

              {/* ----3  */}
              <div class="card p-3 colorfondocardservicios_portafolio text-white border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">              
                <div class="card-body text-card-boxshadow">
                  <h5 class="card-title p-1 rounded shadow-text titulo1-text">2020</h5>
                  <p class="card-text titulo4-text shadow-text texto-justificado">                
                        - Peritaje Topográfico y Revision de expedientes técnicos, propiedades o de parcelas, denuncios mineros,  para su replanteo en el campo los linderos, perímetros y áreas con equipos topográficos de precisión ( Estación Total y GPS diferencial)
                        En AUCALLAMA y HUARAL <br/>
                        -	Levantamiento topográfico de parcelas y elaboración de planos perimétricos y de ubicación.<br/>
                        -	Plano y diseño del sistema de riego tecnificado por goteo para el cultivo de fresas

                  </p>
                </div>
                </div>                              

                {/* ---- 4  */}
                <div class="card p-3 colorfondocardservicios_portafolio text-white border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">                  
                  <div class="card-body text-card-boxshadow">
                    <h5 class="card-title p-1 rounded shadow-text titulo1-text">2021</h5>
                    <p class="card-text titulo4-text shadow-text texto-justificado">                                        
                    - Riego Tecnificado y Cultivo de Fresas y Levantamiento topográfico e instalación de tuberías para riego tecnificado por goteo, cultivo y producción de fresas en el valle de Huaral, Huaura y Chancay.
                    HUARAL, HUAURA, CHANCAY 2021 <br/><br/>

                    - Servicio Técnico Agrícola:	Asesoramiento y soporte técnico en injertos, cultivos de tubérculos, frutas y verduras( papa, fresas, naranjas, manzana, mandarina, lechugas, zanahoria, etc.) <br/><br/>

                    -	Control de proyectos mineros, levantamientos topográficos de labores subterráneas, túneles, chimeneas convencionales, piques, alimack, galerías, rampas, cruceros, Raise Borer (RB), poligonales, muestreo geológico, replanteos, taladros largos, denuncios mineros, cubicaciones de mineral y desmonte. <br/><br/>
                    - En minería a tajo abierto, levantamiento topográfico a curvas de nivel, trazo, replanteo de proyectos, control de banquetas y taludes, accesos, plataformas, botaderos y lo relacionado a movimiento de tierras.

                    </p>                    
                  </div>
                  
                </div>

                {/* ----5  */}
                <div class="card p-3 colorfondocardservicios_portafolio text-white border-0 rounded-0 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  {/* <img class="img-fluid redondearimagen border border-5 border-dark" src="https://i.postimg.cc/wjDqYrrc/CONSTRUCCION-CIVIL.jpg" with="50%" height="30%" alt="Card image cap"/>                   */}

                  <div class="card-body text-card-boxshadow">
                    <h5 class="card-title p-1 rounded shadow-text titulo1-text">2022</h5>
                    <p class="card-text titulo4-text shadow-text texto-justificado">
                      -	Geodesia; Posicionamiento y procesamiento de puntos geodésicos y levantamientos en modo RTK <br/><br/>
                      -	Peritaje y levantamiento topográfico de parcelas, elaboración de planos perimétricos, replanteo de linderos y colindantes.<br/><br/>
                      -	Levantamiento topográfico de parcelas, elaboración de planos y diseño para instalaciones de riego tecnificado por goteo en el cultivo de fresas.<br/><br/>
                      -	Lotizaciones y replanteo de proyectos de edificación<br/><br/>
                      -	Topografía aplicada a la Arqueología, Geología, Minería, Construcción, Obras de Ingeniería y Arquitectura<br/><br/>
                      -	Nivelación Geométrica y Trigonométrica<br/><br/>
                      -	Poligonales superficiales para proyectos de carreteras, obras civiles, minería, arqueología, catastro, agricultura, lotizaciones y otros relacionados a la ingeniería.<br/><br/>
                      -	Control de carreteras, pavimentación, obras de arte, alcantarillado, nivelación, túneles, pistas, línea férrea y/o ferrocarril.<br/><br/>
                      -	Replanteo de parcelas y alineamiento de linderos y/o colindantes.                      
                    </p>                            
                  </div>
                  </div>
                </div>                

          </div>
      </div>
      </>
      );
    }