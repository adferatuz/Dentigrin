import './styles.css'

const Modal = ({children, onClick}) => {
    return(
        <main id="miModal" className='modal'>
            <section id="modalContenido" className='modal-contenido'> 
                <span className='cerrar-modal' onClick={onClick}>X</span>
                {children}        
            </section>
        </main>
    )
}

export default Modal;