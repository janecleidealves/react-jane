import React from 'react';
import '../NavigationBar/NavigationBar.css'
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (

        <nav id='container'>
            <ul style={{paddingTop: 10, paddingBottom: 10}}>
                <li className='button'> <Link to="/">Curriculo</Link></li>
                <li className='button'> <Link to="/Portefolio">Portfólio</Link></li>
                <li className='button'> <Link to="/Contato">Contato</Link></li>
            </ul>
        </nav>



    )


}

export default NavigationBar;
