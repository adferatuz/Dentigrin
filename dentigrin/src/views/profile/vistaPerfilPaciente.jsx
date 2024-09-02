import FormPerfilPaciente from '../../components/forms/formPerfilPaciente';
import {Routes,Route, useParams, useLocation } from 'react-router-dom'
import { useAuth } from '../../components/auth/useAuth';
import './styles.css'
import Manejador404 from '../../components/handleErrors/manejador404';
import TablePatientConsult from '../../components/tables/tablePatientConsult/tablePatientConsult';


export default function VistaPerfilPaciente (){
    const {user} = useAuth()
    const location = useLocation()

    const {idPaciente} = useParams();
    return(
        <>
            {
                //Aqui se renderiza el perfil con el rol paciente
                user.rol === 'paciente' ? 
                    location.pathname === `/perfil/${idPaciente}` ? (
                        <div className='container--account'>
                            <FormPerfilPaciente title={user.rol}/>
                        </div>
                    ):
                    location.pathname === `/perfil/${idPaciente}/agendar-citas-paciente` ? (
                        <div className='container--account'>
                            <Routes>
                                <Route path={`agendar-citas-paciente`} element={<TablePatientConsult rol={user.rol}/>}/>
                            </Routes>
                        </div>
                    ):''             

                : <Manejador404 />          
            }
        </>   
        
    )
}