import Button from '../button/button'
import './styles.css'
import imgEdit from '../../assets/icons/editar-texto.png'

const HistoriaClinica = () => {
    return (
        <form className='form-historia-clinica' action="">
            <h2>Hisroria Clinica del Paciente</h2>
            <div className='div2'>
                <label htmlFor="nombre" title='Nombre Paciente'>Nombre Paciente</label>
                <input 
                    type="text"
                    id='nombre'
                    name='nombre'
                    autoComplete='nombre' />

                <label htmlFor="id_Paciente" title='Id Paciente'>Id Paciente</label>
                <input 
                    type="text"
                    id='id_Paciente'
                    name='id_Paciente'
                    autoComplete='id Paciente' />

            </div>

            <div className='group-textarea div3'>
                <label htmlFor="diagnostico" title='Diagnostico'>Diagnostico</label>
                <textarea 
                    name="diagnostico" 
                    id="diagnostico" 
                    placeholder='Ingresa el diagnostico del paciente'>
                </textarea>
                
            </div>

            <div className='group-textarea div4'>
                <label htmlFor="tratamiento" title='tratamiento'>Tratamiento</label>
                <textarea 
                    name="tratamiento" 
                    id="tratamiento" 
                    placeholder='Ingresa los tratamientos a llevar a cabo'>                
                </textarea>
                
            </div>

            <div className='div5'>
                <Button provideClass={'button-edit btn-dimensions'} textContent={'Actualizar'}/>
                <Button provideClass={'button-ok btn-dimensions'} textContent={'Guardar'}/>
            </div>
        </form>
    )
}

export default HistoriaClinica;