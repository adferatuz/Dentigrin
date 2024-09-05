import { Route, Routes } from 'react-router-dom'
import Nosotros from '../views/nosotros/nosotros'
import Servicios from '../views/servicios/servicios'
import Login from '../views/login/login'
import Register from '../views/registro/register'
import Contactenos from '../views/contactenos/contactenos'
import Inicio from '../views/inicio/inicio'
import Manejador404 from '../components/handleErrors/manejador404'
import Layout from '../components/layout/layout'
import AccountLayout from '../components/layout/accountLayout'
import VistaPerfilPaciente from '../views/profile/vistaPerfilPaciente'
import VistaPerfilOdontologo from '../views/profile/vistaPerfilOdontologo'
import {ProtectedRoute} from '../components/auth/protectedRoute'
import VistaPerfilAdmin from '../views/profile/vistaPerfilAdmin'

export default function Enrutamiento() {
    return(
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element= {<Inicio/>} />
                <Route path='nosotros' element= {<Nosotros/>} />
                <Route path='servicios' element= {<Servicios/>} />            
                <Route path='login' element= {<Login/>} />            
                <Route path='register' element= {<Register/>} />            
                <Route path='contactenos' element= {<Contactenos/>} />            
            </Route> 
            <Route path='/perfil' element={<ProtectedRoute><AccountLayout/></ProtectedRoute>} >               
                <Route path='/perfil/:idPaciente/*' element= {<VistaPerfilPaciente/> }/>                
                <Route path={'/perfil/odontologo/:idOdontologo/*'} element= {<VistaPerfilOdontologo/> }/>                
                <Route path={'/perfil/admin/:idAdmin/*'} element= {<VistaPerfilAdmin/> }
                />                
            </Route>         
            <Route path='*' element= {<Manejador404/>} />  
        </Routes>
    )     
}