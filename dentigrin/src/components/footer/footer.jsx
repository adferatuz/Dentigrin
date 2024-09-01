import './styles.css'
import iconInstagram from '../../assets/icons/logotipo-de-instagram.png'
import iconfb from '../../assets/icons/fbIcon.png'
import iconYT from '../../assets/icons/youtube.png'

export default function Footer ({onClick}){
    return(
            <div className="footer">
                <div className='footer-info'>
                    <p>©2024 DENTIGRIN</p>
                    <p>Todos los derechos reservados</p>
                </div>
                <div className="footer-info">
                    <p onClick={onClick}>Terminos y condiciones</p>
                    <p onClick={onClick}>Politica de privacidad</p>
                </div>
                <div className="footer-icons">
                    <div className="icon"><img src={iconInstagram} alt="icono de instagram" /></div>
                    <div className="icon"><img src={iconfb} alt="" /></div>
                    <div className="icon"><img src={iconYT} alt="" /></div>
                </div>
            </div>         
    )
}