import { datosConsulta, nombreColumnas } from '../../../utils/datosConsultaOdontologo'
import Button from '../../button/button'
import '../stylesTables.css'
import './styles.css'

const TableOdontologoConsult = ()=> {
    return(
        <section className="container-table">            
            <table className="table-consults">
                <caption>
                    <h2 className="title-table">Agendamiento citas</h2>
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
                                    <td>{data.nombreOdontologo}</td>
                                    <td>{data.servicio}</td>
                                    <td>{data.fechaConsulta}</td>
                                    <td>{data.horaConsulta}</td>
                                    <td>
                                        <Button provideClass={'button-ok btn-dimensions'} textContent={'Asistío'} />
                                        <Button provideClass={'button-delete btn-dimensions'} textContent={'No Asístio'} />
                                    </td>
                                    <td></td>
                                </tr>
                            ))
                        }                   
                </tbody>
            </table>
        </section>
    )
}

export default TableOdontologoConsult;