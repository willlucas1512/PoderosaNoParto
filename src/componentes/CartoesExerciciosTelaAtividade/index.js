import React from 'react';
import * as S from './styles.js'
import iconeRespiracao from '../../assets/iconeBrancoRespiracao.png'


function CartoesExerciciosTelaAtividade(props) {
    return (

        <S.Container>

            <img src={iconeRespiracao} alt="Icone da Tarefa" />
            <span>{props.exercicio}</span>

        </S.Container>


    )

}

export default CartoesExerciciosTelaAtividade;
