import PerfilPaciente from '../../components/PerfilPaciente/PerfilPaciente';
import {Routes,Route, useParams, useLocation } from 'react-router-dom'
import { useAuth } from '../../components/auth/useAuth';
import './styles.css'


export default function Profile (){
    const {user} = useAuth()
    const location = useLocation()

    const {idProfile} = useParams();
    return(
        <>
            {location.pathname === `/perfil/${idProfile}` ? (
                <div className='container--account'>
                    <PerfilPaciente title={user.rol}/>
                </div>
            ):
            location.pathname === `/perfil/${idProfile}/agendar-citas` ? (
                <div className='container--account'>
                    <Routes>
                        <Route path={`agendar-citas`} element={<h1>Este es el componente formulario perfil</h1>}/>
                    </Routes>
                </div>
            ):
            (<div className='container--account'><h1>Este es el componente historia clinica</h1></div>)}
            
        </>   
        
    )
}