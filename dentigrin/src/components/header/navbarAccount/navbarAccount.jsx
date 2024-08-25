import { useState} from 'react';
import { useAuth } from '../../auth/useAuth';
import {useParams, Link, useLocation } from 'react-router-dom';
import {listPathsNavbarAccount} from '../../../utils/paths'
import imgLogoDentigrin from '../../../assets/images/LogoDentigrin.jpeg';
import imgLogoOdontoSmile from '../../../assets/images/LogoOdontoSmile.jpeg';
import './styles.css';

export default function NavbarAccount () {

    const location = useLocation(); 
    const {idPaciente, idOdontologo} = useParams()
    const {user} = useAuth()
    const [isActive, setIsActive] = useState(false);
    const filtrarPaths = user.rol === 'paciente' ? listPathsNavbarAccount[0] : listPathsNavbarAccount[1]
    const basePath = idPaciente ? idPaciente : `odontologo/${idOdontologo}`;
    
    const handleToggleClick = () =>{setIsActive((prevState)=>!prevState)};
    console.log('Este es el idOdontologo: ',idOdontologo)
    console.log('Este es el idPaciente: ',idPaciente)
    
    return(

        <>
            <div className='header'>
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
                            <li><Link to={`${basePath}`}>Perfil {user.rol}</Link></li>
                            {Object.keys(filtrarPaths).map((path) => (
                                <li key={path}>
                                    <Link 
                                        to={`${basePath}${path}`} 
                                        className={location.pathname === `${idPaciente}${path}` ? 'active' : ''}
                                    >
                                        {filtrarPaths[path]}
                                    </Link>
                                </li>
                            )) 
                            
                            }
                            <li><Link to={`/`}>Inicio</Link></li>
                        </ul>
                    </div>
                </nav>
                
            </div> 
        </>      
       
    )
};