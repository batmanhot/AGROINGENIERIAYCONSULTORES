import React from 'react';
import '../css/imagenprincipal.css'

 {/* /* Medidas de BreakPoint para el uso en col bootstrap
        Breakpoint	Class infix	Dimensions
        X-Small	None	        <576px
        Small	sm	            ≥576px
        Medium md	            ≥768px
        Large	lg       	      ≥992px
        Extra large	xl	      ≥1200px
        Extra extra large	xxl	≥1400px
        */ }


export default function ImagenPrincipalSeccion() {
    return (
     <>              
          <div class="container-fluid"> 
            <div class='row'> 
              <div class="overlay-dark bg-cover bg-center p-5 imagenprin_nosotros">
                  <div class="overlay-content text-white text-center p-1">

                     {/* <div class="div-portafolio">                            */}                       
                         {/* <p class="demo-text"> 
                            Topografía Minera:
                            Pligonales y levantamiento topográficos de labores subterráneas: piques, chimeneas, galerías, tajos, sub niveles, cruceros y control de proyectos mineros (gradientes, dirección) y replanteos.	
                            2012 Minera Caracol SAC / Barranca  <br/>

                            Levantamiento Topográfico:
                            Parcelas, Toma de datos, procesamiento y replanteo del proyecto para la instalación del riego tecnificado en el cultivo de fresas 	2012 al 2021, 
                            Agrícola Tambillo srl / Huaral, Huacho, Canta <br/>

                            Topografía en Edificaciones: 
                            Replanteo de ejes y perímetro  para la instalación de módulos de cortes en almacén metal mecánica, montajes de estructurar metálicas.	
                            2019 / FAM HOLDING PERU S.A.C. / LIMA <br/>

                            Levantamiento Topográfico:
                            Catastral Urbano	Toma de datos y levantamiento topográfico de viviendas, calles, alumbrado público y otros detalles técnicos que se representan en el plano y su aprobación en el sector competente. 	
                            2012 /Centro Poblado Tambillo / Aucallama. <br/>

                            Peritaje Topográfico: <br/>
                            Revisar expedientes técnicos, propiedades o de parcelas, denuncios mineros,  para su replanteo en el campo los linderos, perímetros y áreas con equipos topográficos de precisión ( Estación Total y GPS diferencial)	
                            En Aucallama y Huaral   2020, 2021 <br/>

                            Geodesia: Posicionamiento y procesamiento de puntos geodésicos y levantamientos en modo RTK	<br/>

                            Lotizaciones y Habilitación Urbana:	<br/>
                            Levantamiento Topográfico de Terrenos y Elaboración de Proyectos y Expedientes Técnicos, Planos de Independización, Lotizaciones, Perimétricos, Asesoramientos y Trámites Administrativos.	
                            Asociaocion de Pobladores Valle Verde Tambillo – Aucallama – Huaral 2019<br/>

                            Riego Tecnificado y Cultivo de Fresas:<br/>

                            Levantamiento topográfico e instalación de tuberías para riego tecnificado por goteo, cultivo y producción de fresas en el valle de Huaral, Huaura y Chancay.
                            Huaral, Huaura, Chancay 2021 <br/>

                            Servicio Técnico Agrícola:	Asesoramiento y soporte técnico en injertos, cultivos de tubérculos, frutas y verduras( papa, fresas, naranjas, manzana, mandarina, lechugas, zanahoria, etc.)	Huaral,
                            Huaura, Chancay 2021.<br/>                
                        </p>  */}

                        <div class="card rounded-0 col-xs-12 col-sm-12 col-md-8 col-lg-6 col-xl-4">
                          <div class="card-body bg-dark">

                            <h3>NOSOTROS</h3>
                            <h6>SOMOS UN STAFF MULTIDISCIPLINARIO</h6>
                              <p>                                
                                Amplia experiencia en los siguientes rubros.
                              </p>

                                <ol class="div-listaenumerada">
                                  <li>Mineria</li>
                                  <li>Geologia y Geografia </li>
                                  <li>Topografia Superficial y Subterranea </li>
                                  <li>Geodesia </li>
                                  <li>Catastro, Lotizaciones y Habilitacion Urbana </li>
                                  <li>Proyectos y Expedientes Tecnicos </li>
                                  <li>Ingenieria Civil y Construccion</li>
                                  <li>Comercio</li>
                                  <li>Agricola</li>
                                  <li>Transporte</li>
                                </ol>                              
                          </div>                             
                        </div>                                                                     
                  </div>
              </div>
            </div>
        </div>
      </>
    );
}
