<<<<<<< HEAD
export default function Login(props) {
    return(
        <div>
           <h2>Pagina Login</h2>
        </div>
=======
import FormAuth from '../../components/formAuth/formAuth.jsx'
import './styles.css'

export default function Login() {
    return(        
        <FormAuth 
            title={'Ingresa a tu cuenta'}
            showLink={true} 
        />            
>>>>>>> 83d338b073e4aac00e89692e12fc308b59544bc0
    )    
}