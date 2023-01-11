import React from 'react';
import { AiFillPhone, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImLocation, ImInstagram } from "react-icons/im";
import { FaServicestack, FaSuitcase, FaUserTie } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import imagenwhatsapp  from "../imagen/whatsapp.png"


import '../css/Footer.css'
import '../css/Whatsapp.css'

const PiedePagina = () => {
  return (  
  <div>
       <a href="https://api.Whatsapp.Com/send?phone=51949553216&text=Necesito%20mas%20informacion%20y%20deseo%20realizar%20algunas%20consultas%20.....%20" target="_blank" title="WhatApp - Comuniquese sin compromiso" class="ws-boton">
          <img class="ws-boton img-fluid" src={imagenwhatsapp} alt="WhatsApp Imagen para Chatear"/>
        </a>

      <footer class="mainfooter" role="contentinfo">

        <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              {/* --Column1--> */}
              <div class="footer-pad">
                <h4>NOSOTROS</h4>
                <p class='footer-nosotros'>Empresa peruana formada con vision de negocio, desarrollo y proactividad para cubrir las necesidades de nuestros clientes en los diferentes rubros y servicios que brindamos y de esta manera fomentamos el crecimiento de nuestro pais.</p>           
              </div>
            </div>

            <div class="col-md-3 col-sm-6">
              {/* <!--Column1--> */}
              <div class="footer-pad">
                <h4>UBICACION</h4>
                <div class='footer-ubicacion'>                
                  <p><AiFillPhone size={22} class='footer-icono-ubicacion'/> Telefonos: <br /> 980556159, 949553216</p>  
                  <p><MdEmail  size={22} class='footer-icono-ubicacion'/> Correo Electronico <br /> jblasperu@hotmail.com <br />topblas1@hotmail.com</p>
                  <p><ImLocation size={22} class='footer-icono-ubicacion'/>Ubicacion : HUARAL - PERU </p>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-6">
              {/* <!--Column1--> */}
              <div class="footer-pad">
                <h4>CONTACTO</h4>
                <ul class="list-unstyled">
                  <div class='footer-contacto'>                    
                    <li><FaUserTie size={22} class='footer-icono-contacto'/> <a href="/Nosotros"> Nosotros</a></li>
                    <li><FaSuitcase size={22} class='footer-icono-contacto'/> <a href="/Portafolio"> Portafolio</a></li>
                    <li><FaServicestack size={22} class='footer-icono-contacto'/> <a href="/"> Servicios</a></li>
                    <li><RiContactsFill size={22} class='footer-icono-contacto'/> <a href="#"> Contacto</a></li>
                  </div>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <h4>SIGUENOS EN NUESTRAS REDES SOCIALES</h4>
                  {/* <ul class="social-network social-circle"> */}
                  <ul class="social-network social-circle">
                    <li><a href="https://www.facebook.com/JBLASPERU/" class="icoFacebook" title="Facebook"><BsFacebook size={28}/> </a></li>                    
                    <li><a href="https://www.youtube.com/channel/UCN9I8mz5bhpNL3Nuv0CV_Zw" class="icoLinkedin" title="Linkedin"><AiFillLinkedin size={28}/> </a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=51949553216&text=Me%20interesa%20realizar%20alguna%20consulta%20.....%20" target="_blank"  class="icoLinkedin" title="WhatApp - Comuniquese sin compromiso"><BsWhatsapp size={28}/> </a></li>
                  </ul>               
          </div>
          </div>
        <div class="row">
          <div class="col-md-12 copy">
            <p class="text-center">&copy; Derechos de Autor 2022 - JBLAS PERU SAC</p>
          </div>
        </div>

      </div>
      </div>
    </footer>
  

  </div>

  );
}
 
export default PiedePagina;
  