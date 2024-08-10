import './styles.css';

export default function Navbar () {
    return(
        <>
            <nav className='navbar'>
                <div className="Logo">
                    <img src="Imagenes/Logo Dentigrin.jpeg" alt=""/>
                    <img src="Imagenes/Logo Odonto Smile.jpeg" alt=""/>
                </div>
                <div>
                    <ul className='enlaces'>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Nosotros</a></li>
                        <li><a href="">Servicios</a></li>
                        <li><a href="">Odontólogo</a></li>
                        <li><a href="">Paciente</a></li>
                        <li><a href="">Administrador</a></li>
                        <li><a href="">Contáctenos</a></li>
                    </ul>
                </div>

            </nav>
        
        </>
    )
}