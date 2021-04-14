import React, { useState, useEffect, useContext } from 'react';
import * as S from './styles.js'
import FilterCard from '../FilterCard'
import CartoesExercicios from '../CartoesExercicios'
import grafico from '../../assets/grafico.png'
import iconeRespiracao from '../../assets/iconePretoRespiracao.png'
import api from '../../services/api';
import StoreContext from './../Store/Context';

function ConteudoTelaProgresso() {


    const [filterActived, setFilterActived] = useState('all');
    const [tasks, setTasks] = useState([]);
    const { cpf } = useContext(StoreContext);
    const { token } = useContext(StoreContext);


    async function loadTasks() {






        await api.get(`/task/filter/${filterActived}/${cpf}`)
            .then(response => {
                setTasks(response.data)

            })
    }



    useEffect(() => {
        loadTasks();



    }, [filterActived, loadTasks])
    if (token === null) {
        console.log(token)
        //   window.location.replace("/")

    }
    return (<div >
        <S.Container >

            <S.Progresso >

                <S.TopSide >
                    <  button type="button" onClick={() => setFilterActived("week")} >
                        <        FilterCard title="Semana" actived={filterActived == "week"} />

                    </button>
                    <button type="button" onClick={() => setFilterActived("month")} >
                        <FilterCard title="Mês" actived={filterActived == "month"} />

                    </button>
                    <button type="button" onClick={() => setFilterActived("all")} >
                        <FilterCard title="Geral" actived={filterActived == "all"} />

                    </button>

                </S.TopSide>
                < S.divisao > _____________________________________________________________________________________________________________________________________________________________________________ </S.divisao>

                <S.Centro >
                    <S.LeftSideCentro >
                        < h1 > Atividades Realizadas </h1>

                        <S.Scroll >

                            {
                                tasks.map(t => (

                                    < CartoesExercicios icone={iconeRespiracao}
                                        titulo={t.titulo}
                                        duracao={t.duracao}
                                        finalizada={t.finalizada}
                                    />

                                ))
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