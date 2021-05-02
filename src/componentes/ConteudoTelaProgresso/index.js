import React, { useState, useEffect, useContext } from 'react';
import * as S from './styles.js'
import FilterCardProgresso from '../FilterCardProgresso'
import CartoesExerciciosProgresso from '../CartoesExerciciosProgresso'
import GraficoTelaProgresso from '../GraficoTelaProgresso'
import iconeRespiracao from '../../assets/iconePretoRespiracao.png'
import api from '../../services/api';
import StoreContext from './../Store/Context';

function ConteudoTelaProgresso() {


    const [filterActived, setFilterActived] = useState('week');
    const [tasks, setTasks] = useState([]);
    const { cpf } = useContext(StoreContext);
    const [graficoRespiracaoSuperficial, setGraficoRespiracaoSuperficial] = useState();
    const [graficoRespiracaoProfunda, setGraficoRespiracaoProfunda] = useState();
    const [graficoRelaxamento, setGraficoRelaxamento] = useState();




    async function loadTasks() {

        var RespiracaoSuperficial = 0
        var RespiracaoProfunda = 0
        var Relaxamento = 0

        await api.get(`/task/filter/${filterActived}/${cpf}`)
            .then(response => {
                setTasks(response.data)

                for (var i = 0; i < response.data.length; i++) {

                    if (response.data[i].titulo == "Respiração Superficial") {
                        RespiracaoSuperficial = RespiracaoSuperficial + 1

                    }
                    if (response.data[i].titulo == "Respiração Profunda") {
                        RespiracaoProfunda = RespiracaoProfunda + 1

                    }
                    if (response.data[i].titulo == "Relaxamento") {
                        Relaxamento = Relaxamento + 1

                    }

                }
                setGraficoRespiracaoSuperficial(RespiracaoSuperficial)
                setGraficoRespiracaoProfunda(RespiracaoProfunda)
                setGraficoRelaxamento(Relaxamento)

            })
    }


    useEffect(() => { loadTasks() }, [filterActived, "1"])

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
                    < S.divisao > _____________________________________________________________________________________________________________________________________________________________________________
                     <div id="labels">
                            < h1> Atividades Realizadas </h1>
                            < h1 > Estatísticas </h1>

                        </div>

                    </S.divisao>

                    <S.Centro >
                        <S.LeftSideCentro >


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

                            <GraficoTelaProgresso
                                graficoRespiracaoSuperficial={graficoRespiracaoSuperficial}
                                graficoRespiracaoProfunda={graficoRespiracaoProfunda}
                                graficoRelaxamento={graficoRelaxamento}
                                alt="Gráfico das tarefas" />

                        </S.RightSideCentro>

                    </S.Centro>

                </S.Progresso>

            </S.Container>
        </div>
    )

}

export default ConteudoTelaProgresso;