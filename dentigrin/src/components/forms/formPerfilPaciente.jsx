import Button from '../button/button'
import './styles.css'

export default function FormPerfilPaciente ({title}) {
    return (
        <div className='container-form--perfil'>
            <form className='form-profile'>
                <h2>Perfil {title}</h2>
                <div className="form-group">
                    
                    <label htmlFor='nombreUsuario'>Nombre de usuario</label>
                    <input id='nombreUsuario' name='nombreUsuario' type="text" placeholder="Ingresa tu nombre de usuario" />
                
                    <label>Contraseña</label>
                    <input type="password" placeholder="Ingresa tu contraseña" />
                
                    <div className='from-group2'>
                        <label>Nombres</label>
                        <label>Apellidos</label>
                        <input type="text" placeholder="Ingresa tus nombres" />
                        <input type="text" placeholder="Ingresa tus apellidos" />
                    </div>

                    <div className='from-group2'>
                        <label>Tipo de identificación</label>
                        <label>Número de identificación</label>
                        <select>
                            <option>Selecciona tipo de identificación</option>
                            <option value="1">Cédula</option>
                            <option value="2">Tarjeta de Identidad</option>
                            <option value="3">Pasaporte</option>
                        </select>
                        <input type="text" placeholder="Ingresa tu número de identificación" />
                    </div>
                    <div className='from-group2'>
                        <label>Edad</label>
                        <label>Género</label>
                        <input type="number" placeholder="Ingresa tu edad" />
                        <select>
                            <option>Selecciona tu género</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </select>
                    </div>

                    <div className='from-group2'>
                        <label>Email</label>
                        <label>Número de contacto</label>
                        <input type="email" placeholder="Ingresa tu email" />
                        <input type="tel" placeholder="Ingresa tu número de contacto" />
                    </div>

                    <div className='from-group2'>
                        <label>Fecha de nacimiento</label>
                        <label>Tipo de sangre</label>
                        <input type="date" name="date" placeholder='dd/mm/aa' />
                        <select>
                            <option >Selecciona tu tipo de sangre</option>
                            <option value="1">A+</option>
                            <option value="2">B+</option>
                        </select>
                    </div>
                    <div className='from-group2'>
                        <label>País</label>
                        <label>Departamento</label>
                        <input type="text" placeholder="Ingresa país"/>
                        <input type="text" placeholder="Ingresa departamento"/>

                    </div>
                    <div className='from-group2'>
                        <label>Ciudad</label>
                        <label>Direccion Residencia</label>
                        <input type="text" placeholder="Ingresa ciudad de residencia"/>
                        <input type='text' placeholder="Residencia"/>
                    </div>
                    <div className="form from-group3">
                        <Button provideClass={'button-ok'} textContent={'Actualizar'} />
                    </div>
                        
                </div>
            </form>
        </div>
    )

}