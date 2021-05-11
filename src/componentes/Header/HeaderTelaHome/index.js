import React from 'react';
import * as S from './styles.js'
import logo from '../../../assets/logo.png'

function HeaderTelaHome() {
    return (
        <div>
            <div className="d-flex flex-column flex-md-column  mb-3  ">
                <S.Container>
                    <img src={logo} />

                </S.Container>
                <S.Menu>
                    <a href="/">Home </a>
                    <span className="dividir" />
                    <a href="/TelaSobreOSite">Sobre o site</a>
                    <span className="dividir" />
                    <a href="/TelaFaleComAGente">Fale com a gente</a>
                </S.Menu>
            </div>
        </div>

    )

}

export default HeaderTelaHome;