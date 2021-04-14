import React from 'react';
import * as S from './styles.js'


//nossos componentes
import Header from '../../componentes/Header/HeaderTelasMenu'
import Footer from '../../componentes/Footer'
import ConteudoTelaPerfil from '../../componentes/ConteudoTelaPerfil'

function TelaPerfil() {
    return (

        <S.Container >

            <Header />
            <ConteudoTelaPerfil />
            <Footer />
        </S.Container>


    )

}

export default TelaPerfil;
