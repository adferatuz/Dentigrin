import { useState, useEffect, useRef } from 'react'
import Button from '../button/button.jsx'
import './styles.css'
import { useLocation } from 'react-router-dom';

export default function FormAuth ({handleSesionClick,showLink, title}) {

    const [isActive, setIsActive] = useState(true)
    const formRef = useRef(null)
    const location = useLocation()

    useEffect(()=>{
        setIsActive(showLink)
    },[])    

    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(formRef.current);
      const formValues = Object.fromEntries(formData.entries());
  
      if(location.pathname == '/login'){
        handleSesionClick(formValues)
      }
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
                        />
                        <label htmlFor="email" title='email'>Correo electronico</label>
                        <input 
                            type="email"
                            id='email'
                            name='email' 
                            autoComplete="email"
                            placeholder='Ingrese el correo electronico' 
                        />
                        <label htmlFor="password" title='password' >Contraseña</label>
                        <input 
                            type="password"
                            id='password'
                            name='password' 
                            autoComplete="current-password"
                            placeholder='Ingrese la contraseña' 
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