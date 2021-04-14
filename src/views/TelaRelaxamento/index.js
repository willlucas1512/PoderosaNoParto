import React from 'react';
import * as S from './styles.js'
import Video from './../../movies/videoRelaxamento.mp4'

//nossos componentes
import Header from '../../componentes/Header/HeaderTelasMenu'
import Footer from '../../componentes/Footer'
import ConteudoTelasExercicios from '../../componentes/ConteudoTelasExercicios'

function TelaRelaxamento() {
    return (

        <S.Container >

            <Header />
            <ConteudoTelasExercicios exercicio="Relaxamento" video={Video} />
            <Footer />
        </S.Container>


    )

}

export default TelaRelaxamento;
