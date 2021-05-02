import React from 'react';
import * as S from './styles.js'
import Video from './../../movies/videoRespiracaoSuperficial.mp4'


//nossos componentes
import Header from '../../componentes/Header/HeaderTelasMenu'
import Footer from '../../componentes/Footer'
import ConteudoTelasExercicios from '../../componentes/ConteudoTelasExercicios'

function TelaRespiracaoSuperficial() {
    return (

        <S.Container >

            <Header />
            <ConteudoTelasExercicios exercicio="Respiração Superficial" video={Video} />
            <Footer />
        </S.Container>


    )

}

export default TelaRespiracaoSuperficial;
