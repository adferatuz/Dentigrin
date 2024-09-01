import {Routes,Route, useParams, useLocation } from 'react-router-dom'
import { useAuth } from '../../components/auth/useAuth';
import './styles.css'
import Manejador404 from '../../components/handleErrors/manejador404';
import FormPerfilAdmin from '../../components/forms/formPerfilAdmin';


export default function VistaPerfilAdmin (){
    const {user} = useAuth()
    const location = useLocation()

    const {idAdmin} = useParams();
    return(
        <>
            {
                //Aqui se renderiza el perfil con el rol admin
                user.rol === 'admin' ? 
                    location.pathname === `/perfil/admin/${idAdmin}` ? (
                        <div className='container--account'>
                            <FormPerfilAdmin idAdmin ={idAdmin} />
                        </div>
                    ):
                    location.pathname === `/perfil/admin/${idAdmin}/agendamiento-citas-admin` ? (
                        <div className='container--account'>
                            <Routes>
                                <Route path={`agendamiento-citas-admin`} element={<h1>Este es el componenete Agendamiento citas Administrador</h1>}/>
                            </Routes>
                        </div>
                    ):
                    location.pathname === `/perfil/admin/${idAdmin}/cronograma-citas` ? (
                        <div className='container--account'>
                            <Routes>
                                <Route path={`cronograma-citas`} element={<h1>Este es el componenete Cronograma de citas</h1>}/>
                            </Routes>
                        </div>
                    ):
                    location.pathname === `/perfil/admin/${idAdmin}/reasignacion-citas` ? (
                        <div className='container--account'>
                            <Routes>
                                <Route path={`reasignacion-citas`} element={<h1>Este es el componenete Reasignacion citas paciente</h1>}/>
                            </Routes>
                        </div>
                    ):
                    location.pathname === `/perfil/admin/${idAdmin}/configuracion-sistema` ? (
                        <div className='container--account'>
                            <Routes>
                                <Route path={`configuracion-sistema`} element={<h1>Este es el componenete configuraciones del sistema</h1>}/>
                            </Routes>
                        </div>
                    ):''            

                : <Manejador404 />          
            }
        </>   
        
    )
}