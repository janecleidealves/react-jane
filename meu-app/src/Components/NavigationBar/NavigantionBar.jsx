
import '../NavigationBar/NavigationBar.css'
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
 
        <nav id='container'>
            <ul>
                 <Link className="button" to="/">Curriculo</Link>
                 <Link className="button" to="/Portefolio">Portfólio</Link>
                 <Link className="button" to="/Contato">Contato</Link>
            </ul>
        </nav> 
    )


}

export default NavigationBar;
