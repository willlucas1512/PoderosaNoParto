import React from 'react';
import * as S from './styles.js'


//nossos componentes
import HeaderTelaHome from '../../componentes/Header/HeaderTelaHome'
import Footer from '../../componentes/Footer'
import ConteudoTelaSobreOSite from '../../componentes/ConteudoTelaSobreOSite'

function TelaSobreOSite() {
    return (

        <S.Container >

            <HeaderTelaHome />
            <ConteudoTelaSobreOSite />
            <Footer />
        </S.Container>


    )

}

export default TelaSobreOSite;
