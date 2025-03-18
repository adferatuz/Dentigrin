import './styles.css'

const Modal = ({children, onClick, title, content}) => {
    return(
        <main id="miModal" className='modal'>
            <section id="modalContenido" className='modal-contenido'> 
                <span className='cerrar-modal' onClick={onClick}>X</span>
                <h2>{title}</h2>
                <div>{content}</div>
                {children}
            </section>
        </main>
    )
}

export default Modal;