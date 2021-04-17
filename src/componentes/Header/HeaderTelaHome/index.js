import React from 'react';
import * as S from './styles.js'
import logo from '../../../assets/logo.png'

function HeaderTelaHome() {
    return (
        <div>
            <S.Container>
                <img src={logo} />

            </S.Container>
            <S.Menu>
                <a href="/">Home </a>
                <span className="dividir" />
                <a href="http://nepae.uff.br/2020/07/08/preparo-para-o-parto-e-aleitamento/">Sobre o projeto</a>
                <span className="dividir" />
                <a href="/TelaFaleComAGente">Fale com a gente</a>
            </S.Menu>
        </div>

    )

}

export default HeaderTelaHome;
