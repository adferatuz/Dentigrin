import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer.jsx';
import Navbar from '../header/navbarMain/navbar.jsx';
import './style.css';
import { useState } from 'react';
import Modal from '../modal/modal.jsx';

export default function Layout (){ 
    const [openModal, setOpenModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });

    const handleClick = (title, content) => {
        setModalContent({ title, content });
        setOpenModal((prevState) => (!prevState));
    }   
    return(
        <section className="layout">
            <Navbar/>                
            <Outlet/> 
            {openModal ? (<Modal onClick={handleClick} title={modalContent.title} content={modalContent.content} />) : ''}            
            <Footer onClick={handleClick}/>                               
        </section>        
    )
}