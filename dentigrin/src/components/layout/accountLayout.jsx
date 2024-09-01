import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer.jsx';
import NavbarAccount from '../header/navbarAccount/navbarAccount.jsx';
import './style.css';
import Modal from '../modal/modal.jsx';
import { useState } from 'react';

export default function AccountLayout (){ 
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () =>{
        setOpenModal((prevState) => (!prevState))
    }  
    return(
        <section className="layout">
            <NavbarAccount/>                
            <Outlet/> 
            {openModal ? (<Modal onClick= {handleClick}/> ):''}            
            <Footer onClick ={handleClick}/>                             
        </section>        
    )
}