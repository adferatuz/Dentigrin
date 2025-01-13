import './styles.css'

export default function Button({provideClass,onclick,textContent, type, disabled}){
    return(
        <button 
            type={type} 
            className={provideClass} 
            onClick={onclick}
            disabled = {disabled}
        >
            {textContent}
        </button>

    )
}