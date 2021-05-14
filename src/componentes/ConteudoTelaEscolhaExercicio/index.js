import React from 'react';
import * as S from './styles.js'


function ConteudoTelaEscolhaExercicio() {

    return (
        <div >
            <S.Container >

                <S.Escolha >
                    <span>Escolha o Exercício</span>
                    <button type="button" onClick={() => { window.location.replace("TelaRespiracaoSuperficial") }}>Respiração Superficial</button>
                    <button type="button" onClick={() => { window.location.replace("TelaRespiracaoProfunda") }}>Respiração Profunda</button>
                    <button type="button" onClick={() => { window.location.replace("TelaRelaxamento") }}>Relaxamento</button>

                </S.Escolha>

            </S.Container>
        </div>
    )

}

export default ConteudoTelaEscolhaExercicio;