import React from 'react';
import * as S from './styles.js'


//nossos componentes
import Header from '../../componentes/Header/HeaderTelaCadastro'
import Footer from '../../componentes/Footer'
import ConteudoTelaCadastro from '../../componentes/ConteudoTelaCadastro'

function TelaCadastro() {
    return (

        <S.Container >

            <Header />
            <ConteudoTelaCadastro />
            <Footer />
        </S.Container>


    )

}

export default TelaCadastro;
