import React from 'react';
import * as S from './styles.js'
import Video from './../../movies/videoRespiracaoProfunda.mp4'

//nossos componentes
import Header from '../../componentes/Header/HeaderTelasMenu'
import Footer from '../../componentes/Footer'
import ConteudoTelasExercicios from '../../componentes/ConteudoTelasExercicios'

function TelaRespiracaoProfunda() {
    return (

        <S.Container >

            <Header />
            <ConteudoTelasExercicios exercicio="Respiração Profunda" video={Video} />
            <Footer />
        </S.Container>


    )

}

export default TelaRespiracaoProfunda;
