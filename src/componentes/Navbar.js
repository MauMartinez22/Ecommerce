import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assests/styles/navBar.css'
import logo from '../assests/images/logo.png'
import { getCart } from '../store/slices/cart.slices';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import CardSidebar from './CardSidebar';

const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toPurchases = () => navigate("/purchases");
    const toLogin = () => navigate("/user");
    const toHome = () => navigate("/");


    useEffect(() => {
        dispatch(getCart())
    }, [dispatch]);

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
        const token = localStorage.getItem('token')
        if(token){
            setShow(true)
        }else{
            navigate('/login')
        }
        
    }; 



    return (
        <>
        <header className='nav-container'>
                <div className='logo'>
                    <h3 onClick={toHome}> Ecommerce</h3>
                </div>


                <div className='list-navbar' >
                    <h3 onClick={toLogin}>Login</h3>
                    <h3 onClick={toPurchases}>Purchases</h3>
                    <h3 onClick={handleShow}>Carrito</h3>
                </div>
        </header>
        <CardSidebar show={show} handleClose={handleClose}/>
        </>
    );
};

export default Navbar;