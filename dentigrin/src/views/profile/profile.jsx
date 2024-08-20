import './styles.css'
import {Routes,Route, useParams, useLocation } from 'react-router-dom'


export default function Profile (){
    const location = useLocation()

    const {idProfile} = useParams();
    return(
        <div className='container--account'>
            {location.pathname === `/perfil/${idProfile}` ? (
                <h1>Perfil: {idProfile}</h1>
            ):
            location.pathname === `/perfil/${idProfile}/agendar-citas` ? (
                <Routes>
                    <Route path={`agendar-citas`} element={<h1>Este es el componente formulario perfil</h1>}/>
                </Routes>
            ):
            (<h1>Este es el componente historia clinica</h1>)}
            
            
        </div>
    )
}