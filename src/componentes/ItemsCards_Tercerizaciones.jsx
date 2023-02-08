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
              <div class="overlay-dark bg-cover bg-center p-5 imagenprin_tercerizaciones">
                  <div class="overlay-content text-white text-center p-1">
                        <div class="card rounded-0 col-xs-12 col-sm-12 col-md-8 col-lg-6 col-xl-4">
                          <div class="card-body bg-dark">

                            <h3>TERCERIZACIONES</h3>
                            <h6>SOMOS UN STAFF MULTIDISCIPLINARIO</h6>
                              <p>                                
                                Estamos preparados para brindarles a nuestros clientes los servicios de tercerizacion.
                              </p>

                                <ol class="div-listaenumerada">
                                  <li>Ingeniería</li>
                                  <li>Servicios Técnicos</li>
                                  <li>Topografía </li>
                                  <li>Geodesia </li>
                                  <li>Logueo Geológico </li>
                                  <li>Muestreo </li>
                                  <li>Cadistas</li>
                                  <li>Limpieza</li>
                                  <li>Mantenimiento de parques y jardines</li>                                                                    
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
