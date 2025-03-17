import Button from '../button/button.jsx'
import './styles.css'
import apiService from "../../services/apiService";

import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';

export default function FormAuth ({handleSesionClick,showLink, title}) {

    // Manejador de estado para los estilos del formulario
    const [isActive, setIsActive] = useState(true);

    const formRef = useRef(null);
    const location = useLocation();

    //Mostrar el link del formulario
    useEffect(()=>{
        setIsActive(showLink)
    },[])     
   
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const formValues = Object.fromEntries(formData.entries()); 
        //console.log(JSON.stringify(formValues))       

        if (location.pathname == '/login') {
            handleSesionClick(formValues)
        }else{
            formValues.rol = 'paciente';
            const response = await apiService.post('register', formValues);
            alert(`El usuario se a guardado exitosamente`); // Notifica al usuario
            clearForm();
        }
    };

    // Función para limpiar los inputs del formulario
    const clearForm = () => {
        formRef.current.reset();
    };

    return(
        
        <div className='container-form'>
            <h1 className='title-login'>BIENVENIDO</h1>
        
            <article>
                <h2>{title}</h2>
                <section className='body-form'>
                    <span>X</span>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <label htmlFor="username" title='Username' >Nombre de Usuario</label>
                        <input 
                            type="text" 
                            id='username'
                            name='username' 
                            autoComplete="username"
                            placeholder='Ingrese el nombre de Usuario'
                            required
                        />
                        <label htmlFor="email" title='email'>Correo electronico</label>
                        <input 
                            type="email"
                            id='email'
                            name='email' 
                            autoComplete="email"
                            placeholder='Ingrese el correo electronico'
                            required 
                        />
                        <label htmlFor="password" title='password' >Contraseña</label>
                        <input 
                            type="password"
                            id='password'
                            name='password' 
                            autoComplete="current-password"
                            placeholder='Ingrese la contraseña'
                            required 
                        />
                        <div>
                            {
                                isActive ? 
                                    <p>¿Olvidaste tu contraseña?</p> 
                                : 
                                    <div className='container-link-login'>
                                        <p>¿Ya tienes una cuenta?</p>
                                        <p>Inicia sesión</p>
                                    </div> 
                            }
                            
                            <Button 
                                provideClass={'button-ok btn--position'} 
                                textContent={'Enviar'}
                                type={'submit'} />
                        </div>
                    </form>
                </section>
            </article>
        </div>
        
    )
}