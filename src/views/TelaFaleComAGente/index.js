import React from 'react';
import * as S from './styles.js'


//nossos componentes
import Header from '../../componentes/Header/HeaderTelaHome'
import Footer from '../../componentes/Footer'
import ConteudoTelaFaleComAGente from '../../componentes/ConteudoTelaFaleComAGente'

function TelaFaleComAGente() {
    return (

        <S.Container >

            <Header />
            <ConteudoTelaFaleComAGente />
            <Footer />
        </S.Container>


    )

}

export default TelaFaleComAGente;
