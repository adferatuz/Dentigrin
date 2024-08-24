import './styles.css'
import Button from '../button/button'
import imgUbicacion from '../../assets/icons/marcadorDePosicion.png'
import imgTelefono from '../../assets/icons/telefono.png'
import imgWhatsapp from '../../assets/icons/whatsapp.png'
import imgEmail from '../../assets/icons/nuevoCorreoElectronico.png'
import imgComentarios from '../../assets/icons/comentarios.png'

export default function Contact (){
    return(
        
        <form action="" className='contain'>
            <div className="container--title">
                <h2 className="title">Contactenos</h2>
            </div>
            <div className='group-label-1'>
                <div className="group-label">
                    <div className='label-container'>
                        <div><img className='contain-icon' src={imgUbicacion} alt="" /></div>
                        <label htmlFor="direction">Direccion:</label>
                    </div>
                    <input type="text" id="direction" name="direction" />
                </div>
                <div className="group-label">
                    <div className='label-container'>
                        <div><img className='contain-icon' src={imgWhatsapp} alt="" /></div>
                        <label htmlFor="whatsapp">Whatsapp:</label>
                    </div>
                    <input type="text" id="whatsapp" name="whatsapp" />
                </div>
            </div>

            <div className='group-label-1'>
                <div className="group-label">
                    <div className='label-container'>
                        <div><img className='contain-icon' src={imgTelefono} alt="" /></div>
                        <label htmlFor="movil">Telefono:</label>
                    </div>
                    <input type="text" id="movil" name="movil" />
                </div>
                <div className="group-label">
                    <div className='label-container'>
                        <div><img className='contain-icon' src={imgEmail} alt="" /></div>
                        <label htmlFor="email">Email:</label>
                    </div>
                    <input type="email" id="email" name="email" />
                </div>
            </div>           
            
            <div className="group-textarea">
                <div className='label-container'>
                    <div><img className='contain-icon' src={imgComentarios} alt="" /></div>
                    <label htmlFor="comments">Comentarios:</label>
                </div>
                <textarea className="text-area" name="comments" id="comments" placeholder='Escribe tus comentarios aqui...'></textarea>
                <Button provideClass={'button-ok btn-position'} type={'submit'} textContent={'Enviar'}/>
            </div>
        </form>
    )
}