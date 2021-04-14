import React from 'react';
import * as S from './styles.js'
import Login from '../../componentes/Login'
import Image from '../../assets/logoInicial.png'
function ConteudoTelaHome() {
    return (
        <div>
            <S.Container>
                <S.LeftSide>
                    <img src={Image} />

                </S.LeftSide>
                <S.RightSide>

                    <S.Login>
                        <Login />

                    </S.Login>
                </S.RightSide>

            </S.Container>

        </div>

    )

}

export default ConteudoTelaHome;
