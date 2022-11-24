import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, FaUserTie, FaServicestack } from 'react-icons/fa'
import { AiFillHome } from  'react-icons/ai'
import { MdConstruction, MdAgriculture, MdOutlineContactPhone }  from 'react-icons/md'
import { GiPencilRuler } from 'react-icons/gi'
import { BsFillDropletFill, BsFilePersonFill } from 'react-icons/bs'
import { GoBriefcase } from 'react-icons/go'

import loguito from '../imagen/LOGO SIN FONDO.png'
import '../css/NavBar.css'

 {/* /* Medidas de BreakPoint para el uso en col bootstrap
        Breakpoint	Class infix	Dimensions
        X-Small	None	        <576px
        Small	sm	            ≥576px
        Medium md	            ≥768px
        Large	lg       	      ≥992px
        Extra large	xl	      ≥1200px
        Extra extra large	xxl	≥1400px
        */ }

const  MenuNavbar =() => {
    return (
        <div className='container-fluid'>

          <div className='row'>          
                {/* col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 */}
                <nav className="navbar navbar-expand-md navbar-dark bg-dark h-400px col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                    {/* navbar-expand-lg */}
                    <img src = { loguito } className="img-fluid m-3" alt="logo" width="100rem"/>
                     {/* <a className="navbar-brand" href="#">AGROINGENIERIA & CONSULTORES PERU <h2> JBLAS PERU EIRL </h2></a> */}
                     
                     <h3 className='text-white card-header titulo1-text'>AGROINGENIERIA & CONSULTORES PERU <br/>JBLAS PERU EIRL </h3>

                    {/* -- MENU COLAPSADO CUANDO SE VEAN EN TAMAÑO CELULAR  */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>  

                    {/* --------------------------------------------------- */}
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                       
                        <ul className="navbar-nav ms-auto p-2">
                            {/* ms-auto  */}
                            {/* mx-auto */}
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>INICIO <br/> <AiFillHome size= {'2rem'}/></Link>
                            </li>
                                                        
                            <li className="nav-item dropdown">                 
                                <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 SERVICIOS<br/><FaServicestack size= {'2rem'} />                                
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item text-item" to='/IngenieriaAgricola'><MdAgriculture size= {'1rem'}/> Ingenieria Agricola </Link>
                                    <Link className="dropdown-item text-item" to='/RiegoTecnificadoFresas'><BsFillDropletFill size= {'1rem'}/> Riego Tecnificado </Link>
                                    <Link className="dropdown-item text-item" to='/TopografiaGeodesia'><GiPencilRuler size= {'1rem'}/> Topografia y Geodesia </Link>
                                    <Link className="dropdown-item text-item" to='/ConstruccionObrasCiviles'><MdConstruction size= {'1rem'}/> Construccion </Link>    

                                    <Link className="dropdown-item text-item" to='#'><BsFilePersonFill size= {'1rem'}/> Nuestros Clientes </Link>
                                    <Link className="dropdown-item text-item" to='#'><GoBriefcase size= {'1rem'}/> Portafolio </Link>
                                    <Link className="dropdown-item text-item" to='#'><MdOutlineContactPhone size= {'1rem'}/> Contacto </Link>
                                </div>
                            </li>
                            

                            <li className="nav-item">
                                <Link className="nav-link" to='/IngenieriaAgricola'>NOSOTROS<br/><FaUserTie size= {'2rem'}/></Link>
                            </li>


                        </ul>
                    </div>
                </nav>
           </div>
        </div>
      );
}
 
export default MenuNavbar;



{/* <li class="nav-item p-2">
<Link className="nav-link" to="/productos"><FaPhotoVideo size={'2rem'}/> PRODUCTOS </Link>
</li> */}