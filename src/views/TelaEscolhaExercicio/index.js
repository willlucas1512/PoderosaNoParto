import React from 'react';
import * as S from './styles.js'


//nossos componentes
import Header from '../../componentes/Header/HeaderTelasMenu'
import Footer from '../../componentes/Footer'
import ConteudoTelaEscolhaExercicio from '../../componentes/ConteudoTelaEscolhaExercicio'

function TelaEscolhaExercicio() {
    return (

        <S.Container >

            <Header />
            <ConteudoTelaEscolhaExercicio />
            <Footer />
        </S.Container>


    )

}

export default TelaEscolhaExercicio;
