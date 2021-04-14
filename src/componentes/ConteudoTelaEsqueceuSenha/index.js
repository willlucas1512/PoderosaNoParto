import React from 'react';
import * as S from './styles.js'


function ConteudoTelaEsqueceuSenha() {
    return (
        <div>
            <S.Container >

                <S.NovaSenha>
                    <S.TopSide>
                        <a > Confirme seus dados e gere uma nova senha </a>
                    </S.TopSide>
                    <S.Centro >

                        <input type="text" className="inputNovaSenha" placeholder="Nome Completo"></input>
                        <input type="number" className="inputNovaSenha" placeholder="CPF"></input>
                        <input type="text" className="inputNovaSenha" placeholder="E-mail"></input>


                        <label className="labelNovaSenha" > Data de Nascimento </label>

                        <input type="date" className="inputDataNovaSenha"></input>
                        <li>
                            <input type="text" className="inputNovaSenha2" placeholder="Senha"></input>
                            <input type="text" className="inputNovaSenha2" placeholder="Confirmar Senha"></input>
                        </li>




                    </S.Centro>
                    <S.BottomSide >

                        <button className="btnNovaSenha" onClick={() => { window.location.replace("/") }}> Alterar Senha </button>
                    </S.BottomSide>
                </S.NovaSenha>
            </S.Container>

        </div>

    )

}

export default ConteudoTelaEsqueceuSenha;