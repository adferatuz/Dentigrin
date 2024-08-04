import Card from "../../components/cards/card";
import { informationCard } from "../../utils/informationCards";
import './styles.css'


export default function Servicios() {
    return(
        <>
            <h1 className="title-service">
                SERVICIOS
            </h1>
            <div className="list--cards">
                {informationCard.map((card, index) => (                
                    <Card 
                        key={index}
                        src={card.src}
                        alt={card.alt}
                        title={card.title}
                        description={card.description}
                    />                
                ))}
            </div>
        </>
    )    
}