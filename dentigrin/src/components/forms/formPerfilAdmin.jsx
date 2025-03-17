import { useEffect,useState, useRef } from 'react'
import Button from '../button/button'
import './styles.css'
import apiService from '../../services/apiService'

const FormPerfilAdmin = ({admin}) =>{

    const formRef = useRef(null);
    const [userAdmin, setUserAdmin] = useState(null);

    async function fetchData() {
        const response = await apiService.get(`admin/${admin.id_usuario}`)
        if (response.success) {
            setUserAdmin(response.data)
        }
    }

     useEffect(() => {
        fetchData();
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const formValues = Object.fromEntries(formData.entries());

        const data = {
           id_usuario: formValues.id_admin,
           nombre: formValues.nombre_admin,
           apellido: formValues.apellido_admin,
           numeroContacto : formValues.contacto_admin           
        }

        const response = await apiService.post('admin', data);
        alert(`El usuario se a guardado exitosamente`); // Notifica al usuario

        if(response){
            fetchData()
        }else{
            alert('Error al guardar el usuario')
        }
    };

    return(
        <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className='form-perfil-admin' >
                
            <div className='container-title-perfil-admin'>
                <h2>Perfil Administrador</h2>
            </div>

            <div className='grp-1'>
                <label htmlFor="nombre_admin" title='Nombre Administrador'>Nombres</label>
                <input
                    placeholder='Ingresa tu Nombre'
                    className='input-form' 
                    type="text"
                    id='nombre_admin'
                    name='nombre_admin'
                    defaultValue={userAdmin ? userAdmin.nombre : ''}
                    readOnly={!!userAdmin}  />
            </div>
            <div className='grp-2'>
                <label htmlFor="apellido_admin" title='Apellidos Administrador'>Apellidos</label>
                <input
                    placeholder='Ingresa tus Apellidos'
                    className='input-form' 
                    type="text"
                    id='apellido_admin'
                    name='apellido_admin'
                    defaultValue={userAdmin ? userAdmin.apellido : ''}
                    readOnly={!!userAdmin}  />
            </div>
            <div className='grp-3'>
                <label htmlFor="id_admin" title='Id del Administrador'>Id Administrador</label>
                <input
                    className='input-form' 
                    type="text"
                    id='id_admin'
                    name='id_admin'
                    value={admin.id_usuario}
                    readOnly />
            </div>
            <div className='grp-4'>
                <label htmlFor="email-admin" title='email del Administrador'>Email</label>
                <input
                    placeholder='Ingresa tu E-mail'
                    className='input-form' 
                    type="email"
                    id='email_admin'
                    name='email_admin'
                    value={admin.email}
                    readOnly />
            </div>
            <div className='grp-5'>
                <label htmlFor="contacto_admin" title='Contacto del Administrador'>Contacto</label>
                <input
                    placeholder='Ingresa tu Numero de Contacto'
                    className='input-form' 
                    type="text"
                    id='contacto_admin'
                    name='contacto_admin'
                    defaultValue={userAdmin ? userAdmin.numeroContacto : ''}
                    readOnly={!!userAdmin}  />
            </div>
            <div className='grp-6'>
                <Button 
                    provideClass={'button-ok'} 
                    textContent={'Guardar'}
                    type={'submit'}
                    disabled={userAdmin? true : false} 
                />
            </div>
        </form>
    )
}

export default FormPerfilAdmin;