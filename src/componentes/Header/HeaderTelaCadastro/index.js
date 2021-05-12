import React from 'react';
import * as S from './styles.js'
import logo from '../../../assets/logo.png'

function Header() {
    return (
        <div className="d-flex flex-column flex-md-column  mb-3  ">
            <S.Container>
                <img src={logo} />
            </S.Container>
            <S.Menu>
                <a href={"/"}>Home</a>
                <span className="dividir" />
                <h3 >{"Cadastro"}</h3>

            </S.Menu>
        </div>

    )

}

export default Header;
