import {Routes,Route, useParams, useLocation } from 'react-router-dom'
import { useAuth } from '../../components/auth/useAuth';
import './styles.css'
import TableOdontologoConsult from '../../components/tables/tableOdontologoConsult/tableOdontologoConsult';
import FormPerfilOdontologo from '../../components/forms/formPerfilOdontologo';
import HistoriaClinica from '../../components/historiaClinica/historiaClinica';

export default function VistaPerfilOdontologo (){
    const {user} = useAuth()
    const location = useLocation()
    const {idOdontologo} = useParams();

    return(
        <>
            {
                //Aqui se renderiza el perfil con el rol odontologo
                    location.pathname === `/perfil/odontologo/${idOdontologo}` ? (
                        <div className='container--account'>
                            <FormPerfilOdontologo title={user.rol} idOdontologo={idOdontologo}/>
                        </div>
                    ):
                    location.pathname === `/perfil/odontologo/${idOdontologo}/agendar-citas-odontologo` ? (
                        <div className='container--account'>
                            <Routes>
                                <Route path={`agendar-citas-odontologo`} element={<TableOdontologoConsult/>}/>
                            </Routes>
                        </div>
                    ):
                    (<div className='container--account'><HistoriaClinica user={user}/></div>)                          

            }
        </>   
        
    )
}