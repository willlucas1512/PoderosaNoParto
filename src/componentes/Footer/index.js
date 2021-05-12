import React from 'react';
import './styles.css'

import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function Footer() {
    return (


        <footer className="footer mt-auto py-3" >

            <div className="conteudo">
                <a href="/TelaPoliticaDePrivacidade">Politica de Privacidade</a>
                <span className="dividir" />
                <a href="/TelaTermosECondicoes">Termos e Condições</a>

            </div>

        </footer>

    )

}

export default Footer;
