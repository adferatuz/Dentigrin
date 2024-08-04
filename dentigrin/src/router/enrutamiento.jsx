import { Route, Routes } from 'react-router-dom'
import Nosotros from '../views/nosotros/nosotros'
import Servicios from '../views/servicios/servicios'
import Login from '../views/login/login'
import Register from '../views/registro/register'
import Contactenos from '../views/contactenos/contactenos'
import Inicio from '../views/inicio/inicio'
import Manejador404 from '../components/handleErrors/manejador404'

export default function Enrutamiento(props) {
    return(
        <Routes>
            <Route path='/' element= {<Inicio/>} />
            <Route path='/nosotros' element= {<Nosotros/>} />
            <Route path='/servicios' element= {<Servicios/>} />            
            <Route path='/login' element= {<Login/>} />            
            <Route path='/register' element= {<Register/>} />            
            <Route path='/contactenos' element= {<Contactenos/>} />            
            <Route path='*' element= {<Manejador404/>} />            
        </Routes>
    )     
}