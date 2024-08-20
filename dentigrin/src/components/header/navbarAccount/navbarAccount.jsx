import { useState} from 'react';
import { useAuth } from '../../auth/useAuth';
import {useParams, Link, useLocation } from 'react-router-dom';
import imgLogoDentigrin from '../../../assets/images/LogoDentigrin.jpeg';
import imgLogoOdontoSmile from '../../../assets/images/LogoOdontoSmile.jpeg';
import './styles.css';

export default function NavbarAccount () {

    const location = useLocation(); 
    const {idProfile} = useParams()
    const {user} = useAuth()
    const [isActive, setIsActive] = useState(false); 
    
    const handleToggleClick = () =>{setIsActive((prevState)=>!prevState)};
    
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
                            <li><Link to={`${idProfile}`}>Perfil Odontologo</Link></li>
                            <li><Link to={`${idProfile}/agendar-citas`}>Agendamiento de Citas</Link></li>
                            <li><Link to={`${idProfile}/historia-clinica`}>Historia Clinica del paciente</Link></li>
                            <li><Link to={`/`}>Inicio</Link></li>
                        </ul>
                    </div>
                </nav>
                
            </div> 
        </>      
       
    )
};