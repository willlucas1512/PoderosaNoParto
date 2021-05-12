import React from "react";
import * as S from './styles.js'
import Login from './../Login'
import Image from '../../assets/logoInicial.png'
function ConteudoTelaHome() {

    return (
        <S.Container>
            <S.LeftSide>

                <img src={Image} />

            </S.LeftSide>
            <S.RightSide>

                <Login />

            </S.RightSide>
        </S.Container>
    )

}

export default ConteudoTelaHome;