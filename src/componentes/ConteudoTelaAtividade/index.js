import React, { useContext } from 'react';
import * as S from './styles.js'


import ProgressoFraco from '../../assets/iconeProgressofraco.png'
import ProgressoBom from '../../assets/iconeProgressoBom.png'
import ProgressoRegular from '../../assets/iconeProgressoRegular.png'
import ProgressoExcelente from '../../assets/iconeProgressoExcelente.png'

import iconeRespiracao from '../../assets/iconePretoRespiracao2.png'
import CartoesExercicios from './../CartoesExerciciosTelaAtividade'
import * as MdIcons from "react-icons/md";
import StoreContext from './../Store/Context';
function ConteudoTelaAtividade(props) {

    const { token, nomeUsuario } = useContext(StoreContext);
    const { respiracaoSuperficialDoDia } = useContext(StoreContext);
    const { respiracaoProfundaDoDia } = useContext(StoreContext);
    const { relaxamentoDoDia } = useContext(StoreContext);
    var data = new Date();
    var dia = data.getDate();
    var numeromes = data.getMonth();
    var mes
    var ano = data.getFullYear();

    if (numeromes === 0) {
        mes = "01"
    }
    if (numeromes === 1) {
        mes = "02"
    }
    if (numeromes === 2) {
        mes = "03"
    }
    if (numeromes === 3) {
        mes = "04"
    }
    if (numeromes === 4) {
        mes = "05"
    }
    if (numeromes === 5) {
        mes = "06"
    }
    if (numeromes === 6) {
        mes = "07"
    }
    if (numeromes === 7) {
        mes = "08"
    }
    if (numeromes === 8) {
        mes = "09"
    }
    if (numeromes === 9) {
        mes = "10"
    }
    if (numeromes === 10) {
        mes = "11"
    }
    if (numeromes === 11) {
        mes = "12"
    }

    function image(tarefaPendentes) {
        console.log(tarefaPendentes)
        if (tarefaPendentes === 3) {
            return ProgressoFraco
        } else if (tarefaPendentes == 2) {

            return ProgressoRegular

        } else if (tarefaPendentes === 1) {
            return ProgressoBom

        } else {
            return ProgressoExcelente

        }

    }





    return (
        <div>


            <S.Container >
                <S.LeftSide >
                    <label>Olá, {nomeUsuario}</label>
                    <img src={image(props.tarefasPendentes)} alt="Imagem Progresso Excelente" />
                </S.LeftSide>
                <S.RigthSide
                    respiracaoSuperficialDoDia={respiracaoSuperficialDoDia}
                    respiracaoProfundaDoDia={respiracaoProfundaDoDia}
                    relaxamentoDoDia={relaxamentoDoDia}

                >

                    <label>Atividades do dia {dia + "/" + mes + "/" + ano}</label>
                    <div id="respiracaoSuperficial" >
                        <button type="button" onClick={() => { window.location.replace("TelaRespiracaoSuperficial") }}   >
                            <CartoesExercicios exercicio={"Respiração Superficial"} icone={iconeRespiracao} />
                        </button>
                    </div>


                    <div id="respiracaoProfunda" >
                        <button type="button" onClick={() => { window.location.replace("TelaRespiracaoProfunda") }}>
                            <CartoesExercicios exercicio={"Respiração Profunda"} icone={iconeRespiracao} />
                        </button>

                    </div>
                    <div id="relaxamentoDoDia" >

                        <button type="button" onClick={() => { window.location.replace("TelaRelaxamento") }} >
                            <CartoesExercicios exercicio={"Relaxamento"} icone={iconeRespiracao} />
                        </button>
                    </div>



                    <button type="button" className="btnAdicionarAtividade" onClick={() => { window.location.replace("TelaEscolhaExercicio") }} >
                        <MdIcons.MdAddCircleOutline size={62} style={{ fill: 'white' }} alt="Icone da Tarefa" />
                        <span>{"Nova Atividade"}</span>
                    </button>


                </S.RigthSide>

            </S.Container>
        </div>
    )

}

export default ConteudoTelaAtividade;