import './style.css';

export default function Layout ({children}){
   
    return(
        <>
            <section className="layout">
                <div className="main">
                    {children}
                </div>                
            </section>
        
        </>
    )

}