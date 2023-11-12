import React from 'react';
import * as S from './styles.js';



function Footer() {
    return (


        <S.Footer >

          <S.Menu>
                <a href="/TelaPoliticaDePrivacidade">Politica de Privacidade</a>
                <span className="dividir" />
                <a href="/TelaTermosECondicoes">Termos e Condições</a>
          </S.Menu>
      

        </S.Footer>

    )

}

export default Footer;
