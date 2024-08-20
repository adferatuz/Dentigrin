import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer.jsx';
import NavbarAccount from '../header/navbarAccount/navbarAccount.jsx';
import './style.css';

export default function AccountLayout (){   
    return(
        <section className="layout">
            <NavbarAccount/>                
            <Outlet/> 
            <Footer/>                             
        </section>        
    )
}