import React from 'react';
import * as S from './styles.js'


//nossos componentes
import Header from '../../componentes/Header/HeaderTelaHome'
import Footer from '../../componentes/Footer'
import ConteudoTelaPoliticaDePrivacidade from '../../componentes/ConteudoTelaPoliticaDePrivacidade'

function TelaPoliticaDePrivacidade() {
    return (

        <S.Container >

            <Header />
            <ConteudoTelaPoliticaDePrivacidade />
            <Footer />
        </S.Container>


    )

}

export default TelaPoliticaDePrivacidade;
