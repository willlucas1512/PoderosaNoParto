import React from 'react';
import * as S from './styles.js'


//nossos componentes
import Header from '../../componentes/Header/HeaderTelaEsqueceuSenha'
import Footer from '../../componentes/Footer'
import ConteudoTelaResetarSenha from '../../componentes/ConteudoTelaResetarSenha'

function TelaResetarSenha() {
    return (

        <S.Container >

            <Header />
            <ConteudoTelaResetarSenha />
            <Footer />
        </S.Container>


    )

}

export default TelaResetarSenha;
