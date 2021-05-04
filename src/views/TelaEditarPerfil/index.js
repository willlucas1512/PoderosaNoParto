import React from 'react';
import * as S from './styles.js'


//nossos componentes
import Header from '../../componentes/Header/HeaderTelasMenu'
import Footer from '../../componentes/Footer'
import ConteudoEditarTelaPerfil from '../../componentes/ConteudoEditarTelaPerfil'

function TelaEditarPerfil() {
    return (

        <S.Container >

            <Header />
            <ConteudoEditarTelaPerfil />
            <Footer />
        </S.Container>


    )

}

export default TelaEditarPerfil;
