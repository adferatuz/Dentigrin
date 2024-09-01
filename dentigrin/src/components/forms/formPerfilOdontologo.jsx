import Button from '../button/button'
import imgEdit from '../../assets/icons/editar-texto.png'
import './styles.css'

export default function FormPerfilOdontologo ({title, idOdontologo}) {
    return (
        <div className='container-form--perfil'>
            <form className='form-profile'>
                <h2>Perfil {title}</h2>
                <div className="form-group">

                    <div className='from-group2'>
                        <label title='nombres' htmlFor='nombres'>Nombres</label>
                        <label title='apellidos' htmlFor='apellidos'>Apellidos</label>
                        <input 
                            id='nombres' 
                            name='nombres' 
                            autoComplete='nombres' 
                            type="text" 
                            placeholder="Ingresa tus nombres" />
                            

                        <input 
                            id='apellidos' 
                            name='apellidos' 
                            autoComplete='apellidos' 
                            type="text" 
                            placeholder="Ingresa tus apellidos" />
                         <div className='container-icon-edit'><img className='icon-edit' src={imgEdit}alt="Icono Editar" /></div>
                    </div>

                    <div className='from-group2'>
                        <label htmlFor='idOdontologo' title='id Odontologo'>Id Odontologo</label>
                        <label htmlFor='direccionResidencia' title='direccion de residencia'>Dirección de residencia</label>
                        <input 
                            id='idOdontologo' 
                            name='idOdontologo' 
                            autoComplete='idOdontologo'
                            value={idOdontologo}
                            readOnly 
                            type="text" />

                        <input 
                            id='direccionResidencia' 
                            name='direccionResidencia' 
                            autoComplete='direccionResidencia' 
                            type="text" 
                            placeholder="Ingresa dirección de residencia"/>

                        <div className='container-icon-edit'><img className='icon-edit' src={imgEdit}alt="Icono Editar" /></div>

                    </div>
                    <div className='from-group2'>
                        <label htmlFor='genero' title='género'>Género</label>
                        <label htmlFor='especializacion' title='especialización'>Especialización</label>
                        <input 
                            id='genero' 
                            name='genero' 
                            autoComplete='genero' 
                            type="text" 
                            placeholder="Género"/>

                        <input 
                            id='especializacion' 
                            name='especializacion' 
                            autoComplete='especializacion' 
                            type='text' 
                            placeholder="Especialización"/>

                        <div className='container-icon-edit'><img className='icon-edit' src={imgEdit}alt="Icono Editar" /></div>
                    </div>
                    <div className="form from-group3">
                        <Button provideClass={'button-edit'} textContent={'Actualizar'} />
                    </div>
                        
                </div>
            </form>
        </div>
    )

}