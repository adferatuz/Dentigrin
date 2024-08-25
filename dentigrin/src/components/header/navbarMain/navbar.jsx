import { useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import imgLogoDentigrin from '../../../assets/images/LogoDentigrin.jpeg';
import imgLogoOdontoSmile from '../../../assets/images/LogoOdontoSmile.jpeg';
import {paths, filtherPaths} from '../../../utils/paths';
import './styles.css';

export default function Navbar () {

    const location = useLocation(); 
    const [showLinks, setShowLinks] = useState(false); 
    const [isActive, setIsActive] = useState(false); 
    
    const handleLoginClick = () => {setShowLinks(true)};
    const handleHomeClick = () => {setShowLinks(false)};
    const handleToggleClick = () =>{setIsActive((prevState)=>!prevState)};

    const filtrarRutas = showLinks ?  filtherPaths : paths;
    
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
                    
                    <div>
                        <ul className='enlaces'>
                            {Object.keys(filtrarRutas).map((path) => (
                                <li key={path}>
                                    <Link 
                                        to={path} 
                                        className={location.pathname === path ? 'active' : ''}
                                        onClick={path === '/login' ? handleLoginClick : (path === '/' ? handleHomeClick : null)}
                                    >
                                        {filtrarRutas[path]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                
            </div> 
        </>      
       
    )
}

