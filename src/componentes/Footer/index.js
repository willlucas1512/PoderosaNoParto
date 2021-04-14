import React from 'react';
import * as S from './styles.js'

function Footer() {
    return (
        <div>
            <S.Container>

                <a href="/TelaPoliticaDePrivacidade">Politica de Privacidade</a>
                <span className="dividir" />
                <a href="/TelaTermosECondicoes">Termos e Condições</a>
            </S.Container>

        </div>

    )

}

export default Footer;
