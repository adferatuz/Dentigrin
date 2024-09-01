import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer.jsx';
import Navbar from '../header/navbarMain/navbar.jsx';
import './style.css';
import { useState } from 'react';
import Modal from '../modal/modal.jsx';

export default function Layout (){ 
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () =>{
        setOpenModal((prevState) => (!prevState))
    }   
    return(
        <section className="layout">
            <Navbar/>                
            <Outlet/> 
            {openModal ? (<Modal onClick= {handleClick}/> ):''}            
            <Footer onClick ={handleClick}/>                              
        </section>        
    )
}