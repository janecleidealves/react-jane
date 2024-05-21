
import React from 'react';

import './Portefolio.css'
import janecleide from '../../assets/img.jpeg'
 function Portefolio() {

    return(
        <header>
        <div class= "item-portefolio">
        <a herf="https://academy.comeialabs.com.br/" target="_blank"/>
            <img src={janecleide}alt="imagem do face de janecleide" />
            <p> Site Comeia Academy</p>
        <div><h2>Profissional</h2>
            <ul>
                <li>Bacharel em Administração</li>
                <li>Auxiliar Administrativo 2019-2020</li>
                <li>Administradora e maker 2022-2024</li>
            </ul>
        </div>
</div>
</header>
    )

 }
 export default Portefolio;