import Button from '../button/button'
import './styles.css'

export default function FormPerfilPaciente ({title}) {
    return (
        <div className='container-form--perfil'>
            <form className='form-profile'>
                <h2>Perfil {title}</h2>
                <div className="form-group">
                    
                    <label htmlFor='NombreUsuario'>Nombre de usuario</label>
                    <input type="text" id='NombreUsuario' name='NombreUsuario' placeholder="Ingresa tu nombre de usuario" />
                
                    <label htmlFor='Contraseña'>Contraseña</label>
                    <input type="password" id='Contraseña' name='Contraseña' placeholder="Ingresa tu contraseña" />
                
                    <div className='from-group2'>
                        <label htmlFor='Nombre'>Nombres</label>
                        <label htmlFor='Apellido'>Apellidos</label>
                        <input type="text" id='Nombre' name='Nombre' placeholder="Ingresa tus nombres" />
                        <input type="text" id='Apellido' name='Apellido' placeholder="Ingresa tus apellidos" />
                    </div>

                    <div className='from-group2'>
                        <label htmlFor='TipoID'>Tipo de identificación</label>
                        <label htmlFor='ID'>Número de identificación</label>
                        <select id='TipoID' name='TipoID'>
                            <option>Selecciona tipo de identificación</option>
                            <option value="1">Cédula</option>
                            <option value="2">Tarjeta de Identidad</option>
                            <option value="3">Pasaporte</option>
                        </select>
                        <input type="text" id='ID' name='ID' placeholder="Ingresa tu número de identificación" />
                    </div>
                    <div className='from-group2'>
                        <label htmlFor='Edad'>Edad</label>
                        <label htmlFor='Genero'>Género</label>
                        <input type="number" id='Edad' name='Edad' placeholder="Ingresa tu edad" />
                        <select id='Genero' name='Genero' >
                            <option>Selecciona tu género</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </select>
                    </div>

                    <div className='from-group2'>
                        <label htmlFor='Email'>Email</label>
                        <label htmlFor='Contacto'>Número de contacto</label>
                        <input type="email" id='Email' name='Email' placeholder="Ingresa tu email" />
                        <input type="tel" id='Contacto' name='Contacto' placeholder="Ingresa tu número de contacto" />
                    </div>

                    <div className='from-group2'>
                        <label htmlFor='Nacimiento'>Fecha de nacimiento</label>
                        <label htmlFor='RH'>Tipo de sangre</label>
                        <input type="date" id='Nacimiento' name="date" placeholder='dd/mm/aa' />
                        <select id='RH' name='RH'>
                            <option >Selecciona tu tipo de sangre</option>
                            <option value="1">A+</option>
                            <option value="2">A-</option>
                            <option value="3">B+</option>
                            <option value="4">B-</option>
                            <option value="5">AB+</option>
                            <option value="6">AB-</option>
                            <option value="7">O+</option>
                            <option value="8">O-</option>
                        </select>
                    </div>
                    <div className='from-group2'>
                        <label htmlFor='Pais'>País</label>
                        <label htmlFor='DPTO'>Departamento</label>
                        <input type="text" id='Pais' name='Pais' placeholder="Ingresa país"/>
                        <input type="text" id='DPTO' name='DPTO' placeholder="Ingresa departamento"/>

                    </div>
                    <div className='from-group2'>
                        <label htmlFor='Ciudad'>Ciudad</label>
                        <label htmlFor='Residencia'>Direccion Residencia</label>
                        <input type="text" id='Ciudad' name='Ciudad' placeholder="Ingresa ciudad de residencia"/>
                        <input type='text' id='Residencia' name='Residencia' placeholder="Residencia"/>
                    </div>
                    <div className="form from-group3">
                        <Button provideClass={'button-ok'} textContent={'Actualizar'} />
                    </div>
                        
                </div>
            </form>
        </div>
    )

}