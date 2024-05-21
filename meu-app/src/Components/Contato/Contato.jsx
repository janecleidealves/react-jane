import React from 'react';

import "./Contato.css";





function Contato() {

    return (
        <main>
            <center>
                <h1>Olá, Deseja Falar Comigo.</h1>
                <form action="">

                    <input
                        className='abelha'
                        type="text"
                        placeholder='Seu nome completo'
                        minLength='3'
                        required
                    />
                    <input
                        className='abelha'
                        type="email"
                        placeholder='seu email'
                        title="Email precisa ser no formato correto"
                        minLength='3'
                        required
                    />



                    <input
                        className='abelha'
                        type="tel"
                        placeholder='insira seu contato'
                        minLength={14}
                        pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"
                        title='insira seu numero correto'
                        required


                    />
                    <textarea
                        className='abelha'
                        name=""
                        id=""
                        cols='60'
                        rows='10'
                        placeholder='Deixe seu recado'
                    >
                    </textarea>

                    <input
                        className='abelha'
                        type="submit"
                        value="ENVIAR"

                    />

                </form>
            </center>
        </main>

    )



}
export default Contato;
