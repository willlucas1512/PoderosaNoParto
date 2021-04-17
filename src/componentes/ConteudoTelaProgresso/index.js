import React, { useState, useEffect, useContext } from 'react';
import * as S from './styles.js'
import FilterCardProgresso from '../FilterCardProgresso'
import CartoesExerciciosProgresso from '../CartoesExerciciosProgresso'
import grafico from '../../assets/grafico.png'
import iconeRespiracao from '../../assets/iconePretoRespiracao.png'
import api from '../../services/api';
import StoreContext from './../Store/Context';

function ConteudoTelaProgresso() {


    const [filterActived, setFilterActived] = useState('all');
    const [tasks, setTasks] = useState([]);
    const { cpf } = useContext(StoreContext);
    const { token } = useContext(StoreContext);

    if (token === null) {

        window.location.replace("/")

    }


    async function loadTasks() {

        await api.get(`/task/filter/${filterActived}/${cpf}`)
            .then(response => {
                setTasks(response.data)

            })
    }



    useEffect(() => {
        loadTasks();



    }, [filterActived, loadTasks])



    return (

        <div >
            <S.Container >

                <S.Progresso >

                    <S.TopSide >
                        <  button type="button" onClick={() => setFilterActived("week")} >
                            <        FilterCardProgresso title="Semana" actived={filterActived == "week"} />

                        </button>
                        <button type="button" onClick={() => setFilterActived("month")} >
                            <FilterCardProgresso title="Mês" actived={filterActived == "month"} />

                        </button>
                        <button type="button" onClick={() => setFilterActived("all")} >
                            <FilterCardProgresso title="Geral" actived={filterActived == "all"} />

                        </button>

                    </S.TopSide>
                    < S.divisao > _____________________________________________________________________________________________________________________________________________________________________________ </S.divisao>

                    <S.Centro >
                        <S.LeftSideCentro >
                            < h1 > Atividades Realizadas </h1>

                            <S.Scroll >

                                {
                                    tasks.map(t => (

                                        < CartoesExerciciosProgresso icone={iconeRespiracao}
                                            titulo={t.titulo}
                                            duracao={t.duracao}
                                            finalizada={t.finalizada}
                                        />

                                    )).reverse()
                                }

                            </S.Scroll>


                        </S.LeftSideCentro>

                        <S.RightSideCentro >
                            <    h1 > Estatísticas </h1>
                            <img src={grafico} alt="Gráfico das tarefas" />
                        </S.RightSideCentro>

                    </S.Centro>

                </S.Progresso>

            </S.Container>
        </div>
    )

}

export default ConteudoTelaProgresso;