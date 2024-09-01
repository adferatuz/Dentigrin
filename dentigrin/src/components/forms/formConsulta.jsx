import './styles.css'
import Button from '../button/button';

const FormConsulta = () => {
    return(
        <form className='form-consultas' action="">

            <div className='container-title-consults'>
                <h2>Agendamiento de cita</h2>    
            </div>
            
            <div className='group-1'>
                <label htmlFor="nombre" title='Nombre Paciente'>Nombre Paciente</label>
                <input
                    className='input-form'  
                    type="text"
                    id='nombre'
                    name='nombre'
                    autoComplete='nombre' />

                <label htmlFor="id_cita" title='Id de la Cita'>Id de la Cita</label>
                <input 
                    className='input-form' 
                    type="text"
                    id='id_cita'
                    name='id_cita'
                    autoComplete='id de la cita' />

            </div>

            <div className='group-2'>
                <label htmlFor="nombre_odontologo" title='Nombre Odontologo'>Odontologo</label>
                <input 
                    className='input-form' 
                    type="text"
                    id='nombre_odontologore'
                    name='nombre_odontologo'
                    autoComplete='nombre odontologo' />

                <label htmlFor="hora" title='Hora'>Hora</label>
                <input 
                    className='input-form' 
                    type="datetime-local"
                    id='hora'
                    name='hora'
                    autoComplete='hora' />

            </div>  

            <div className='group-3'>
            <label htmlFor="estado" title='Estado de la cita'>Estado de la Cita</label>
                <input
                    className='input-form' 
                    type="text"
                    id='estado'
                    name='estado'
                    autoComplete='estado' />
            </div>        

            <div className='group-4'>
                <Button provideClass={'button-ok'} textContent={'Guardar'}/>
                <Button provideClass={'button-delete'} textContent={'Cancelar'}/>
            </div>
        </form>
    )
}

export default FormConsulta;