import React from 'react';
import * as S from './styles.js'


//nossos componentes
import HeaderTelaHome from '../../componentes/Header/HeaderTelaHome'
import Footer from '../../componentes/Footer'
import ConteudoTelaHome from '../../componentes/ConteudoTelaHome'

class Home extends React.Component {
    render() {
        return (

            <S.Container >
                <HeaderTelaHome />
                <ConteudoTelaHome />
                <Footer />
            </S.Container>


        )
    }

}

export default Home;