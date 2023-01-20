import React from 'react';

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ImagenPrincipalSeccion from './ItemsCards_ImagenPrincipal_Contactos.jsx'

import { AiFillPhone, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImLocation, ImInstagram } from "react-icons/im";
import { IoGitNetworkSharp } from "react-icons/io5";
import { BsFacebook, BsWhatsapp, BsYoutube} from "react-icons/bs";

export default function ItemsCards_Contactos() {
   return (
    <>   
      <div>        
        <div class="card-group">
          <div class='row'> 

              <ImagenPrincipalSeccion /> 

              <div class="card bg-dark text-white rounded-0">
                 <h2 class="card-header titulo1-text">CONTACTANOS</h2>
              </div> 
              
              
              <div class="card text-card-padding colorfondocardservicios_agricola border-2 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">

                <div class="card-body">
                    <AiFillPhone size={50}/>
                  <h5 class="mt-3 card-title titulo2-text text-white shadow-text">TELEFONOS</h5>
                  <p class="card-text titulo4-text shadow-text text-white text-center">
                      CELULAR: 980556159 < br/>
                      CELULAR: 949553216 < br/>
                  </p>                                
                </div>
                  {/* <div class="card-footer">
                  </div>               */}
              </div>

              <div class="card text-card-padding colorfondocardservicios_agricola border-2 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <div class="card-body">
                    <MdEmail size={50}/>
                  <h5 class="mt-3 card-title titulo2-text text-white shadow-text">CORREO ELECTRONICO</h5>
                  <p class="card-text titulo4-text shadow-text text-white text-center">                                    
                      jblasperu@hotmail.com < br/> 
                      topblas1@hotmail.com < br/> 
                  </p>              

                </div>
                {/* <div class="card-footer">
                 </div>               */}
              </div>              

              <div class="card text-card-padding colorfondocardservicios_agricola border-2 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">

                <div class="card-body">
                  <IoGitNetworkSharp size={50}/>
                  <h5 class="mt-3 card-title titulo2-text text-white shadow-text">REDES SOCIALES </h5>

                  <p class="card-text titulo4-text shadow-text text-white text-center">                                    
                      Siguenos en nuestros diversos canales en las redes sociales < br/> 
                  </p> 
     
                  <ul class="social-network social-circle mt-3">
                    <li><a href="https://www.facebook.com/JBLASPERU/" class="icoFacebook" title="Facebook - Vea nuestras publicaciones en nuetra red"><BsFacebook size={28}/> </a></li>                    
                    <li><a href="https://www.instagram.com/jblasperu/" class="icoLinkedin" title="Linkedin en nuestras publicaciones"><AiFillLinkedin size={28}/> </a></li>
                    <li><a href="https://www.youtube.com/channel/UCN9I8mz5bhpNL3Nuv0CV_Zw" class="icoLinkedin" title="Youtube - Vea nuestras publicaciones en nuetro canal"><BsYoutube size={28}/> </a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=51949553216&text=Me%20interesa%20realizar%20alguna%20consulta%20.....%20" target="_blank"  class="icoLinkedin" title="WhatApp - Comuniquese sin compromiso"><BsWhatsapp size={28}/> </a></li>
                  </ul>        

                  
                </div>
                  {/* <div class="card-footer">                  
                  </div>               */}
              </div>

              <div class="card text-card-padding colorfondocardservicios_agricola border-2 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-12 col-xl-3">
                {/* <img class="card-img-fluid encuadrarimagen" src={instalacionderiego} with='50%' height='50%' alt="Card image cap"/> */}
                
                <div class="card-body">
                  <ImLocation size={50}/>
                  <h5 class="mt-3 card-title titulo2-text text-white shadow-text">UBICACION</h5>
    
                  <a href = "https://goo.gl/maps/SVDTBhWzieaXybfe9" target="_blank"  title="Ubicacion Plaza de Armas de Aucallama - HUARAL CITY">PLAZA DE ARMAS DE AUCALLAMA -  HUARAL - LIMA - PERU</a> 

                 

                </div>

                 {/* <div class="card-footer">                
                  </div>               */}
              </div>
          </div>
        </div>      
      </div>
      </>
      );
    }