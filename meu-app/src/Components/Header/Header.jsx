
import React from 'react';

import './Header.css';

function Header(props) {

    const { nome, cargo, foto } = props.informacoes;

    return (
        <header>
            <img src={foto} alt="foto" className="fotos" />
            <h1 id='nome-perfil'>{nome}</h1>
            <h3 id='eventoSubtitle'>{cargo}</h3>
        </header>
    );
}
export default Header;