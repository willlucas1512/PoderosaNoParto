import React from 'react';
import * as S from './styles.js'


//nossos componentes
import Header from '../../componentes/Header/HeaderTelaEsqueceuSenha'
import Footer from '../../componentes/Footer'
import ConteudoTelaEsqueceuSenha from '../../componentes/ConteudoTelaEsqueceuSenha'

function TelaCadastro() {
    return (

        <S.Container >

            <Header />
            <ConteudoTelaEsqueceuSenha />
            <Footer />
        </S.Container>


    )

}

export default TelaCadastro;
