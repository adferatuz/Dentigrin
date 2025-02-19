import Button from '../button/button'
import './styles.css'
import imgEdit from '../../assets/icons/editar-texto.png'
import imgSearch from '../../assets/icons/lupa.png'

const HistoriaClinica = () => {
    return (
        <form className='form-historia-clinica' action="">
            <h2>Hisroria Clinica del Paciente</h2>
            <div
             className='div2'>

                <label htmlFor="tipo_identificacion" title='Tipo de identificacion'>Tipo de identificación</label>
                <select>
                    <option>Selecciona tipo de identificación</option>
                    <option value="1">Cédula</option>
                    <option value="2">Tarjeta de Identidad</option>
                </select>

                <div className="div2 group-input-button">
                    <label htmlFor="numero_identificacion" title='Numero de identificación'>Numero de identificación</label>
                    <input
                        type="text"
                        id='numero_identificacion'
                        name='numero_identificacion'
                        autoComplete='Tipo de identificacion' />

                    <button 
                        className='btn-group-input'
                        title='Buscar'>
                            <div className="icon">
                            <img id='imgSearch' src={imgSearch} alt="Buscar" />
                            </div>
                        </button>
                </div>

                <label htmlFor="nombre" title='Nombre Paciente'>Nombre Paciente</label>
                <input 
                    type="text"
                    id='nombre'
                    name='nombre'
                    autoComplete='nombre' />

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
                <Button provideClass={'button-edit btn-dimensions'} textContent={'Buscar registros'}/>
                <Button provideClass={'button-ok btn-dimensions'} textContent={'Guardar'}/>
            </div>
        </form>
    )
}

export default HistoriaClinica;