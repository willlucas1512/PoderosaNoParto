import React from 'react';
import * as S from './styles.js'
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from "react-icons/md";

function CartoesExerciciosTelaAtividade(props) {

    function iconeExercicio() {
        if (props.exercicio == "Relaxamento")
            return <MdIcons.MdAirlineSeatReclineExtra color="white" size="50" alt="Icone da Tarefa" />
        else
            return <GiIcons.GiAwareness color="white" size="50" alt="Icone da Tarefa" />


    }

    return (

        <S.Container>

            {iconeExercicio()}
            <span>{props.exercicio}</span>

        </S.Container>


    )

}

export default CartoesExerciciosTelaAtividade;
