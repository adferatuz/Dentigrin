import { datosConsulta, nombreColumnas } from '../../../utils/datosConfiguracionesPaciente';
import Button from '../../button/button';
import '../stylesTables.css'
import './styles.css'

const TableConfigurationsPatient = ({resetClick}) => {
    return(
        <section className="container-table container-table-2">            
            <table className="table-consults table-consults2">
                <caption>
                    <h2 className="title-table2">Ver Pacientes</h2>
                </caption>
                <thead className="table-head">
                    <tr>
                        {
                            nombreColumnas.map((title, index) => (
                                    <th key={index}>{title}</th> 
                        ))}
                    </tr>
                </thead>
                <tbody>                    
                        {
                            datosConsulta.map((data, index) =>(
                                <tr key={index}>
                                    <td>{data.idPaciente}</td>
                                    <td>{data.nombrePaciente}</td>
                                    <td>{data.estado}</td>
                                    <td>
                                        <Button provideClass={'button-ok btn-dimensions'} textContent={'Ver'} />
                                        <Button provideClass={'button-ok btn-dimensions'} textContent={'Editar'} />
                                    </td>
                                    <td></td>
                                </tr>
                            ))
                        }                   
                </tbody>
                <div className='btns-container'>
                    <Button provideClass={'button-ok btn-dimensions btn-dimensions2'} textContent={'Volver'} onclick={resetClick}/>
                    <Button provideClass={'button-ok btn-dimensions'} textContent={'Añadir Paciente'} />
                </div>
            </table>
        </section>



    )
}

export default TableConfigurationsPatient ;