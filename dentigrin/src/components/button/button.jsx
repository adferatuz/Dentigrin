import './styles.css'

export default function Button({provideClass,onclick,textContent}){
    return(
        <button className={provideClass} onClick={onclick}>{textContent}</button>

    )
}