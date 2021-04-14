import React from 'react';
import * as S from './styles.js'


//nossos componentes
import Header from '../../componentes/Header/HeaderTelasMenu'
import Footer from '../../componentes/Footer'
import ConteudoTelaMais from '../../componentes/ConteudoTelaMais'

function TelaMais() {
    return (

        <S.Container >

            <Header />
            <ConteudoTelaMais />
            <Footer />
        </S.Container>


    )

}

export default TelaMais;
