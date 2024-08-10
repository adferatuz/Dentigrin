import './styles.css'

export default function Card ({src, alt, title, description }) {
    
    return(
        <div className='card'>
            <div className='container-img'>
                <img className='img-card' src={src} alt={alt} />
            </div>
            <div>
                <h3 className='title-card'>{title}</h3>
                <p className='description-card'> {description}</p>
            </div>
        </div>
    )
}