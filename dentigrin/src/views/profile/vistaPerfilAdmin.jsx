import {Routes,Route, useParams, useLocation } from 'react-router-dom'
import { useAuth } from '../../components/auth/useAuth';
import './styles.css'
import Manejador404 from '../../components/handleErrors/manejador404';
import FormPerfilAdmin from '../../components/forms/formPerfilAdmin';
import TablePatientConsult from '../../components/tables/tablePatientConsult/tablePatientConsult';
import Calendar from '../../components/calendar/calendar';
import ConfigurationSystem from '../../components/configurationSystems/configurationSystem';
import { useState } from 'react';


export default function VistaPerfilAdmin (){
    const {user} = useAuth()
    const location = useLocation()
    const [isActive, setIsActive] = useState(false)

    const addClassContainer = ()=>{
        setIsActive(!isActive)
    }

    const {idAdmin} = useParams();
    return(
        <>
            {
                //Aqui se renderiza el perfil con el rol admin
                user.rol === 'admin' ? 
                    location.pathname === `/perfil/admin/${idAdmin}` ? (
                        <div className='container--account'>
                            <FormPerfilAdmin admin ={user} />
                        </div>
                    ):
                    location.pathname === `/perfil/admin/${idAdmin}/agendamiento-citas-admin` ? (
                        <div className='container--account'>
                            <Routes>
                                <Route path={`agendamiento-citas-admin`} element={<TablePatientConsult rol={user.rol} />}/>
                            </Routes>
                        </div>
                    ):
                    location.pathname === `/perfil/admin/${idAdmin}/cronograma-citas` ? (
                        <div className='container--account'>
                            <Routes>
                                <Route path={`cronograma-citas`} element={<Calendar />}/>
                            </Routes>
                        </div>
                    ):
                    location.pathname === `/perfil/admin/${idAdmin}/config-system` ? (
                        <div className={`container--account ${isActive ? 'container-account2': ''}`} >
                            <Routes>
                                <Route path={`config-system/*`} element={<ConfigurationSystem isActive={isActive} addClassContainer ={addClassContainer} idAdmin={idAdmin}/>}/>                          
                            </Routes>
                        </div>
                    ):''            

                : <Manejador404 />          
            }
        </>   
        
    )
}