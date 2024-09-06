import {useLocation} from 'react-router-dom'
import { configurationPaths } from '../../utils/paths'
import imgFlecha from '../../assets/icons/flecha-derecha.png'
import { useEffect, useState} from 'react'
import './styles.css'
import TableConfigurationsOdont from '../tables/tableConfigurationsOdont/tableConfigurationsOdont'
import TableConfigurationsPatient from '../tables/tableConfigurationsPatient/tableConfigurationsPatient'

const ConfigurationSystem = ({addClassContainer, isActive,idAdmin}) => {
    const [linkId, setLinkId] = useState(4)

    const handleClick = (event) => {
        const id = event.currentTarget.id;
        setLinkId(id)
        addClassContainer()

    }
    const resetClick = () => {
        setLinkId(4)
        addClassContainer()
    }

    console.log('Este es el valor de linkId: ',linkId)

    return(
        <>  
            <section className={`wrapper`}>
                <ul>
                    {Object.keys(configurationPaths).map((path, index) => (
                        <li className={`${linkId == 4 ? 'links' : linkId == index ? 'links' : 'link-noShow' }`} key={index}>
                            <div className='icon icon-list'><img src={imgFlecha} alt="" /></div>
                            <p  id={index} onClick={handleClick}>
                                {configurationPaths[path]}
                            </p>
                        </li>
                    ))}          
                </ul>
            </section>  

            {
                linkId == 0 ? (<TableConfigurationsOdont resetClick={resetClick}/>) :
                linkId == 1 ? (<TableConfigurationsPatient resetClick={resetClick} />) :
                linkId == 2 ? (<h1 onClick={resetClick}>Aqui se renderizan las configuraciones del sistema Configuraciones</h1>): 
                              ''
            }  
                
        </>

    )
}

export default ConfigurationSystem;