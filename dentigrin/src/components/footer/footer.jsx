import './styles.css'
import iconInstagram from '../../assets/icons/logotipo-de-instagram.png'
import iconfb from '../../assets/icons/fbIcon.png'
import iconYT from '../../assets/icons/youtube.png'

export default function Footer ({onClick}) {
    const terminosYCondiciones = (
        <div>
            <h5>Servicios</h5>
            <p>Desarrollo de software Dentigrin para Odonto Smile, operando desde Bogotá para el 
            centro en Timbío, Cauca.</p>
            <h5>Pagos</h5>
            <p>Total de $75.212.800, dividido en 50% al firmar, 25% a los 60 días y 25% al entregar 
            el producto.</p>
            <h5>Responsabilidades</h5>
            <p>Odonto Smile debe proporcionar un entorno seguro, accesos y personal para las actividades del proyecto.</p>
            <h5>Garantía</h5>
            <p>90 días para reportar fallas con evidencias requeridas.</p>
            <h5>Fuerza Mayor</h5>
            <p>Retrasos por eventos fuera de control (desastres, huelgas, etc.) extenderán los plazos.</p>
            <h5>Conformidad</h5>
            <p>Odonto Smile debe confirmar la conformidad del producto en un plazo máximo de 5 días tras la entrega.</p>
        </div>
    );

    const politicasDePrivacidad = (
        <div>
            <p> En Dentigrin, la protección de la información sensible y la privacidad de los pacientes son prioritarias. Nos comprometemos a garantizar que sus datos personales estén resguardados bajo los más altos estándares de seguridad y cumplimiento normativo (Ley 1581 de 2012, Ley 1273 de 2009 y Ley 962 de 2005).</p>
            <h5>Medidas de Seguridad</h5>
            <p>Implementamos protocolos de encriptación y auditorías periódicas para proteger la información almacenada. Acceso restringido solo a personal autorizado, con roles definidos según responsabilidades (médicos, administrativos, etc.).</p>
            <h5>Control de Acceso</h5>
            <p>Gestión de permisos por niveles: cada usuario accede únicamente a las funciones necesarias para su rol.Autenticación obligatoria (usuarios y contraseñas seguras) para evitar accesos no autorizados.</p>
            <h5>Derechos de los Titulares</h5>
            <p>Puede solicitar acceso, corrección o eliminación de sus datos personales mediante solicitud escrita.Garantizamos transparencia en el tratamiento de su información y respuesta oportuna a sus consultas.</p>
            <h5>Cumplimiento Legal</h5>
            <p>Alineamos nuestras prácticas con las normativas colombianas de protección de datos y ciberseguridad.</p>
        </div>
    );
    return (
        <div className="footer">
            <div className='footer-info'>
                <p>©2024 DENTIGRIN</p>
                <p>Todos los derechos reservados</p>
            </div>
            <div className="footer-info">
                <p onClick={() => onClick('Términos y Condiciones', terminosYCondiciones)}>Términos y condiciones</p>
                <p onClick={() => onClick('Política de Privacidad', politicasDePrivacidad)}>Política de privacidad</p>
            </div>
            <div className="footer-icons">
                <div className="icon"><img src={iconInstagram} alt="icono de instagram" /></div>
                <div className="icon"><img src={iconfb} alt="" /></div>
                <div className="icon"><img src={iconYT} alt="" /></div>
            </div>
        </div>
    )
}