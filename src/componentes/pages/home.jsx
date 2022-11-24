import React from 'react';

import PiedePagina from '../Footer'
import MenuNavbar from '../NavBar'

import ImagenPrincipal_Home from '../ItemsCards_TextoSuperpuesto_ImagenPrincipal.jsx'
import NuestrosServicios_Home from '../ItemsCards_Texto_NuestrosServicios.jsx'
import ClientesSatisfechos_Home from '../ItemsCards_TextoCentral_ClientesSatisfechos.jsx'


const HomeWeb = () => {
return(
    <div>
        {/* <MenuNavbar /> */}
        <ImagenPrincipal_Home/>
        <NuestrosServicios_Home/>
        <ClientesSatisfechos_Home/>
        {/* <PiedePagina/>                 */}
    </div>
)}
 
export default HomeWeb;