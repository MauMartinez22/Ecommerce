import React from 'react';
import'../assests/styles/Footer.css'
import { useNavigate } from "react-router-dom"

const Footer = () => {

    const navigate = useNavigate();

    const toPurchases = () => navigate("/purchases");
    const toLogin = () => navigate("/user");
    const toHome = () => navigate("/");


    return (
        <footer>
            <div class="contain">
                <div class="column">
                    <h1>Company</h1>
                    <ul>
                        <li onClick={toHome} >Home</li>
                        <li onClick={toLogin} >Login</li>
                        <li onClick={toPurchases} >Purchases</li>
                    </ul>
                </div>
                
                <div class="column">
                    <h1>Support</h1>
                    <ul>
                        <li> <a href="https://www.linkedin.com/in/mauricio-martinez-columnmenares-8ab03a172/" target='in-black'> Contact</a></li>
                        <li><a href="mailto:mauriciomjmc2018@gmail.com?Subject=Interesado%20en%20tus%20servicios">Mail</a></li>
                        <li><a href="https://github.com/MauMartinez22">GitHub</a></li>
                    </ul>
                </div>
            </div>
                <ul class="wrapper">
                    <li class="icon facebook">
                        <span class="tooltip">Facebook</span>
                        <span><i class="fab fa-facebook-f"></i></span>
                    </li>
                    <li class="icon twitter">
                        <span class="tooltip">Twitter</span>
                        <span><i class="fab fa-twitter"></i></span>
                    </li>
                    <li class="icon instagram">
                        <span class="tooltip">Instagram</span>
                        <span><i class="fab fa-instagram"></i></span>
                    </li>
                    <li class="icon github">
                        <span class="tooltip">Github</span>
                        <span><i class="fab fa-github"></i></span>
                    </li>
                </ul>
            {/*<div className='button-footer'>
                <h3>© Reserved Mauricio Martinez</h3>
                <ul>
                    <li> <a href="https://www.linkedin.com/in/mauricio-martinez-columnmenares-8ab03a172/" target='in-black'> <img src={linkdin}/>   </a></li>
                    <li> <a href="https://github.com/MauMartinez22" target='in-black'> <img src={github} /> </a> </li>
                </ul>
            </div>*/}
        </footer>
    );
};

export default Footer;