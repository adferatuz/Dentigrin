import FormAuth from '../../components/formAuth/formAuth.jsx'
import './styles.css'

export default function Login() {
    return(        
        <FormAuth 
            title={'Ingresa a tu cuenta'}
            showLink={true} 
        />            
    )    
}