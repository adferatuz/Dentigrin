import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer.jsx';
import Navbar from '../header/navbarMain/navbar.jsx';
import './style.css';

export default function Layout (){   
    return(
        <section className="layout">
            <Navbar/>                
            <Outlet/> 
            <Footer/>                             
        </section>        
    )
}