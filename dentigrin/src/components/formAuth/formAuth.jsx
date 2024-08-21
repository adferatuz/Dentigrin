import { useState, useEffect } from 'react'
import Button from '../button/button.jsx'
import './styles.css'

export default function FormAuth ({provideClass,showLink, title}) {

    const [isActive, setIsActive] = useState(true)
    useEffect(()=>{setIsActive(showLink)},[])

    return(
        
        <div className='container-form'>
            <h1 className='title-login'>BIENVENIDO</h1>
        
            <article>
                <h2>{title}</h2>
                <section className='body-form'>
                    <span>X</span>
                    <form action="">
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
                            
                            <Button provideClass={'button-ok btn--position'} textContent={'Enviar'} />
                        </div>
                    </form>
                </section>
            </article>
        </div>
        
    )
}