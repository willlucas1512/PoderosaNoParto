import React, { useMemo } from 'react';
import { format } from 'date-fns';
import * as S from './styles.js'
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from "react-icons/md";

function CartoesExerciciosProgresso({ titulo, duracao, finalizada }) {
    const date = useMemo(() => format(new Date(finalizada), 'dd/MM/yyyy'));

    function iconeExercicio() {

        if (titulo === "Relaxamento")
            return <MdIcons.MdAirlineSeatReclineExtra size="35" />
        else
            return <GiIcons.GiAwareness size="35" alt="Icone da Tarefa" />



    }

    return (

        <div>
            <S.Container>

                <S.LeftSide>

                    {iconeExercicio()}

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

export default CartoesExerciciosProgresso;
