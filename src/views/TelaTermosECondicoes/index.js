import React, { useContext } from 'react';
import * as S from './styles.js'
import StoreContext from '../../componentes/Store/Context'

//nossos componentes
import HeaderTelaHome from '../../componentes/Header/HeaderTelaHome'
import HeaderTelasMenu from '../../componentes/Header/HeaderTelasMenu'
import Footer from '../../componentes/Footer'
import ConteudoTelaTermosECondicoes from '../../componentes/ConteudoTelaTermosECondicoes'



function TelaTermosECondicoes() {

    const { token } = useContext(StoreContext);


    function tipoHeader() {
        if (token === null)
            return <HeaderTelaHome />
        else
            return <HeaderTelasMenu />


    }
    return (

        <S.Container >

            {tipoHeader()}
            <ConteudoTelaTermosECondicoes />
            <Footer />
        </S.Container>


    )

}

export default TelaTermosECondicoes;
