import React, { useMemo } from 'react';
import { format } from 'date-fns';
import * as S from './styles.js'
import iconeRespiracao from '../../assets/iconePretoRespiracao.png'


function CartoesExercicios({ titulo, duracao, finalizada }) {
    const date = useMemo(() => format(new Date(finalizada), 'dd/MM/yyyy'));


    return (
        <div>
            <S.Container>

                <S.LeftSide>

                    <img src={iconeRespiracao} alt="Icone da Tarefa" />

                </S.LeftSide>
                <S.CenterSide>
                    <S.TopCenterSide>

                        <label>{titulo}</label>

                    </S.TopCenterSide>
                    <S.BottomCenterSide>

                        <label>{duracao}</label>

                    </S.BottomCenterSide>


                </S.CenterSide>
                <S.RigthSide>

                    <label id="tempoDeExercicio" >
                        <strong>{date}</strong>

                    </label>

                </S.RigthSide>
            </S.Container>

        </div>

    )

}

export default CartoesExercicios;
