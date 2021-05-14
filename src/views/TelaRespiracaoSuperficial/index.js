import React from 'react';
import * as S from './styles.js'
import Audio from './../../audios/audioRespiracaoSuperficial.mp3'


//nossos componentes
import Header from '../../componentes/Header/HeaderTelasExercicios'
import Footer from '../../componentes/Footer'
import ConteudoTelasExercicios from '../../componentes/ConteudoTelasExercicios'

function TelaRespiracaoSuperficial() {
    return (

        <S.Container >

            <Header />
            <ConteudoTelasExercicios exercicio="Respiração Superficial" audio={Audio} />
            <Footer />
        </S.Container>


    )

}

export default TelaRespiracaoSuperficial;
