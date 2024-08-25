import {Routes,Route, useParams, useLocation } from 'react-router-dom'
import { useAuth } from '../../components/auth/useAuth';
import './styles.css'
import Manejador404 from '../../components/handleErrors/manejador404';


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
                            <h1>Perfil {user.rol}</h1>
                        </div>
                    ):
                    location.pathname === `/perfil/odontologo/${idOdontologo}/agendar-citas-odontologo` ? (
                        <div className='container--account'>
                            <Routes>
                                <Route path={`agendar-citas-odontologo`} element={<h1>Este es el componenete Agendamiento citas Odontologo</h1>}/>
                            </Routes>
                        </div>
                    ):
                    (<div className='container--account'><h1>Este es el componente historia clinica desde Odontologo</h1></div>)                          
            
            }
        </>   
        
    )
}