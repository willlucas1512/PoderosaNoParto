import React from 'react';
import * as S from './styles.js'


//nossos componentes
import Header from '../../componentes/Header/HeaderTelaHome'
import Footer from '../../componentes/Footer'
import ConteudoTelaTermosECondicoes from '../../componentes/ConteudoTelaTermosECondicoes'

function TelaTermosECondicoes() {
    return (

        <S.Container >

            <Header />
            <ConteudoTelaTermosECondicoes />
            <Footer />
        </S.Container>


    )

}

export default TelaTermosECondicoes;
