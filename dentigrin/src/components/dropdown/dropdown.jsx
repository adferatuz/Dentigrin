import { Link } from 'react-router-dom';
import './styles.css'

const Dropdown = ({basePath,paths, className, handleClick}) => {

    
    return(
        <div className={`container-dropdown ${className}`}>
            <ul className='enlaces-dropdown'>
                {
                    Object.keys(paths).map((path) => (
                        <li key={path}>
                            <Link 
                                to={`${basePath}${path}`}
                                onClick={handleClick} 
                            >
                                {paths[path]}
                            </Link>
                        </li>
                    )) 
                }
            </ul>
        </div>
    )
}

export default Dropdown;