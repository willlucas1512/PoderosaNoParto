import React from 'react';
import * as S from './styles.js'


//nossos componentes
import Header from '../../componentes/Header/HeaderTelasMenu'
import Footer from '../../componentes/Footer'
import ConteudoTelaProgresso from '../../componentes/ConteudoTelaProgresso'

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
