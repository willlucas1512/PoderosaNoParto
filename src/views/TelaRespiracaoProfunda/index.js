import React from 'react';
import * as S from './styles.js'
import Audio from './../../audios/audioRespiracaoProfunda.mp3'

//nossos componentes
import Header from '../../componentes/Header/HeaderTelasExercicios'
import Footer from '../../componentes/Footer'
import ConteudoTelasExercicios from '../../componentes/ConteudoTelasExercicios'

function TelaRespiracaoProfunda() {
    return (

        <S.Container >

            <Header />
            <ConteudoTelasExercicios exercicio="Respiração Profunda" audio={Audio} />
            <Footer />
        </S.Container>


    )

}

export default TelaRespiracaoProfunda;
