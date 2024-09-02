import Button from '../button/button'
import './styles.css'

const FormPerfilAdmin = ({idAdmin}) =>{
    return(
        <form className='form-perfil-admin' action="">
            <div className='container-title-perfil-admin'>
                <h2>Perfil Administrador</h2>
            </div>

            <div className='grp-1'>
                <label htmlFor="nombre_admin" title='Nombre Administrador'>Nombres</label>
                <input
                    placeholder='Ingresa tu Nombre'
                    className='input-form' 
                    type="text"
                    id='nombre_admin' />
            </div>
            <div className='grp-2'>
                <label htmlFor="apellido_admin" title='Apellidos Administrador'>Apellidos</label>
                <input
                    placeholder='Ingresa tus Apellidos'
                    className='input-form' 
                    type="text"
                    id='apellido_admin' />
            </div>
            <div className='grp-3'>
                <label htmlFor="id_admin" title='Id del Administrador'>Id Administrador</label>
                <input
                    className='input-form' 
                    type="text"
                    id='id_admin'
                    value={idAdmin}
                    readOnly />
            </div>
            <div className='grp-4'>
                <label htmlFor="email-admin" title='email del Administrador'>Email</label>
                <input
                    placeholder='Ingresa tu E-mail'
                    className='input-form' 
                    type="email"
                    id='email_admin' />
            </div>
            <div className='grp-5'>
                <label htmlFor="contacto_admin" title='Contacto del Administrador'>Contacto</label>
                <input
                    placeholder='Ingresa tu Numero de Contacto'
                    className='input-form' 
                    type="text"
                    id='contacto_admin' />
            </div>
            <div className='grp-6'>
                <Button provideClass={'button-ok'} textContent={'Guardar'}/>
            </div>
        </form>
    )
}

export default FormPerfilAdmin;