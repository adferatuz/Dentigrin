import './style.css';

export default function Layout ({children}){
   
    return(
        <>
            <section className="layout">                
                {children}                             
            </section>
        
        </>
    )

}