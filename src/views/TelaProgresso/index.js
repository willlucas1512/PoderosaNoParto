import React from 'react';
import * as S from './styles.js'
import Header from '../../componentes/Header/HeaderTelasMenu'
import Footer from '../../componentes/Footer'
import ConteudoTelaProgresso from '../../componentes/ConteudoTelaProgresso'
import GlobalVertical from '../../styles/globalVertical.js';

function TelaProgresso() {
    return (

        <S.Container >

            <Header />
            <ConteudoTelaProgresso />
            <Footer />
           
        </S.Container>


    )

}

export default TelaProgresso;
