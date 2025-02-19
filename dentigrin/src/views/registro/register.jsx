import FormAuth from "../../components/formAuth/formAuth";
import './styles.css'

export default function Register(props) {
    return(
        <FormAuth 
            title={'Registra tu cuenta'}
            showLink={false} 
        />        
    )    
}