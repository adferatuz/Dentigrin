import './styles.css'

export default function Button({provideClass,onclick,textContent, type}){
    return(
        <button type={type} className={provideClass} onClick={onclick}>{textContent}</button>

    )
}