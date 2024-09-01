import { useState} from 'react';
import { useAuth } from '../../auth/useAuth';
import {useParams, Link, useLocation } from 'react-router-dom';
import {listPathsNavbarAccount} from '../../../utils/paths'
import imgLogoDentigrin from '../../../assets/images/LogoDentigrin.jpeg';
import imgLogoOdontoSmile from '../../../assets/images/LogoOdontoSmile.jpeg';
import './styles.css';
import Dropdown from '../../dropdown/dropdown';

export default function NavbarAccount () {

    const location = useLocation(); 
    const {idPaciente, idOdontologo, idAdmin} = useParams()
    const {user} = useAuth()
    const [isActive, setIsActive] = useState(false);
    const [isFunction, setIsFunction] = useState(false);
    const filtrarPaths = user.rol === 'paciente' ? listPathsNavbarAccount[0] : user.rol === 'odontologo' ? listPathsNavbarAccount[1] : listPathsNavbarAccount[2];
    const basePath = idPaciente ? idPaciente : idOdontologo ? `odontologo/${idOdontologo}` : `admin/${idAdmin}`;
    
    const handleToggleClick = () =>{setIsActive((prevState)=>!prevState)};
    const handleOnMouseOverFunctions = () => {setIsFunction(true)};
    const handleOnMouseOutFunctions = () => {setIsFunction(false)};
    return(

        <>
            <div className='header' onClick={handleOnMouseOutFunctions}>
                <label
                    htmlFor="burger"
                    className={`burger ${isActive ? "burger--active" : ""}`}
                    onClick={handleToggleClick}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </label>                         
                <nav className={`navbar ${isActive ? "nav--active" : ""}`}>                        
                    <div className="Logo">
                        <img 
                            className='image_logo'
                            src={imgLogoDentigrin} 
                            alt="logo de dentigrin"/>
                        <img
                            className={`image_logo ${isActive ? 'invisible' : 'invisible'}`}
                            src={imgLogoOdontoSmile} 
                            alt=""/>
                    </div>
                    
                    <div className='container-enlaces_navbarAccount'>
                        <ul className='enlaces-navbarAccount'>
                            <li><Link to={`${basePath}`} onMouseOver={handleOnMouseOutFunctions}>Perfil {user.rol}</Link></li>
                            {
                                basePath === `admin/${idAdmin}` ? 
                                <li>
                                    <Link to={location.pathname} onMouseOver={handleOnMouseOverFunctions} >Funciones &nbsp;<span>&#x25BC;</span></Link> 
                                    {isFunction ? <Dropdown handleClick={handleOnMouseOutFunctions} className={'container-visibility'} basePath={basePath} paths={filtrarPaths} /> : ''}
                                </li> 
                            
                            :
                                Object.keys(filtrarPaths).map((path) => (
                                    <li key={path}>
                                        <Link 
                                            to={`${basePath}${path}`} 
                                        >
                                            {filtrarPaths[path]}
                                        </Link>
                                    </li>
                                )) 
                            
                            }
                            <li><Link to={`/`} onMouseOver={handleOnMouseOutFunctions}>Inicio</Link></li>
                        </ul>
                    </div>
                </nav>
                
            </div> 
        </>      
       
    )
};