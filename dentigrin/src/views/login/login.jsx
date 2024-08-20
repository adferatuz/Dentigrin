import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../components/auth/useAuth.jsx'
import FormAuth from '../../components/formAuth/formAuth.jsx'
import './styles.css'
import { useEffect } from 'react'

export default function Login() {
    const { login, user} = useAuth()
    const navigate = useNavigate()
    const { state } = useLocation()

    const handleSesionClick = (formValues) => {
        login(formValues)
    }

    useEffect(() => {
        if (user) {
            console.log('Este es el valor de user: ', user);
            navigate(state?.location?.pathname ?? `/perfil/${user.id_usuario}`);
        }
    }, [user, navigate, state]);

    return(        
        <FormAuth 
        handleSesionClick={handleSesionClick}
            title={'Ingresa a tu cuenta'}
            showLink={true} 
        />            
    )    
}