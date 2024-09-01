import { datosConsulta, nombreColumnas } from "../../../utils/datosConsultaPaciente";
import { useState } from "react";
import Button from '../../button/button'
import Modal from '../../modal/modal'
import FormConsulta from '../../forms/formConsulta'
import '../stylesTables.css'
import './styles.css'

const TablePatientConsult = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () =>{
        setOpenModal((prevState) => (!prevState))
    }

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
                                    <td>{data.idOdontologo}</td>
                                    <td>{data.horaConsulta}</td>
                                    <td>{data.fechaConsulta}</td>
                                    <td>Dr. {data.nombreOdontologo}</td>
                                    <td><Button onclick={handleClick} provideClass={'button-ok btn-dimensions'} textContent={'AGENDAR CITA'} /></td>
                                </tr>
                            ))
                        }                   
                </tbody>
            </table>
            {openModal ? (<Modal onClick= {handleClick}> <FormConsulta/> </Modal> ): ''}
            
        </section>

    )
}

export default TablePatientConsult;