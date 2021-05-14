import React from 'react';
import * as S from './styles.js'
import Audio from './../../audios/audioRelaxamento.mp3'

//nossos componentes
import Header from '../../componentes/Header/HeaderTelasExercicios'
import Footer from '../../componentes/Footer'
import ConteudoTelasExercicios from '../../componentes/ConteudoTelasExercicios'

function TelaRelaxamento() {
    return (

        <S.Container >

            <Header />
            <ConteudoTelasExercicios exercicio="Relaxamento" audio={Audio} />
            <Footer />
        </S.Container>


    )

}

export default TelaRelaxamento;
