import React, { useContext } from 'react';
import * as S from './styles.js'
import ProgressoFraco from '../../assets/iconeProgressofraco.png'
import ProgressoBom from '../../assets/iconeProgressoBom.png'
import ProgressoRegular from '../../assets/iconeProgressoRegular.png'
import ProgressoExcelente from '../../assets/iconeProgressoExcelente.png'
import BotoesExercicios from './../BotoesExerciciosTelaAtividade'
import * as MdIcons from "react-icons/md";
import StoreContext from './../Store/Context';



function ConteudoTelaAtividade(props) {

    const { nomeUsuario } = useContext(StoreContext);
    const { respiracaoSuperficialDoDia } = useContext(StoreContext);
    const { respiracaoProfundaDoDia } = useContext(StoreContext);
    const { relaxamentoDoDia } = useContext(StoreContext);
    const nomeArray = nomeUsuario.split(" ")
    const nome = nomeArray[0]

    var data = new Date();
    var numerodia = data.getDate();
    var dia
    var numeromes = data.getMonth();
    var mes
    var ano = data.getFullYear();

    function numeroMes(numeromes) {
        if (numeromes === 0) {
            var mes = "01"
            return mes
        }
        if (numeromes === 1) {
            var mes = "02"
            return mes
        }
        if (numeromes === 2) {
            var mes = "03"
            return mes
        }
        if (numeromes === 3) {
            var mes = "04"
            return mes
        }
        if (numeromes === 4) {
            var mes = "05"
            return mes
        }
        if (numeromes === 5) {
            var mes = "06"
            return mes
        }
        if (numeromes === 6) {
            var mes = "07"
            return mes
        }
        if (numeromes === 7) {
            var mes = "08"
            return mes
        }
        if (numeromes === 8) {
            var mes = "09"
            return mes
        }
        if (numeromes === 9) {
            var mes = "10"
            return mes
        }
        if (numeromes === 10) {
            var mes = "11"
            return mes
        }
        if (numeromes === 11) {
            var mes = "12"
            return mes
        }

    }
    function numeroDia(numerodia) {

        if (numerodia === 1) {
            var dia = "01"
            return dia
        }
        else if (numerodia === 2) {
            var dia = "02"
            return dia
        }
        else if (numerodia === 3) {
            var dia = "03"
            return dia
        }
        else if (numerodia === 4) {
            var dia = "04"
            return dia
        }
        else if (numerodia === 5) {
            var dia = "05"
            return dia
        }
        else if (numerodia === 6) {
            var dia = "06"
            return dia
        }
        else if (numerodia === 7) {
            var dia = "07"
            return dia
        }
        else if (numerodia === 8) {
            var dia = "08"
            return dia
        }
        else if (numerodia === 9) {
            var dia = "09"
            return dia
        } else {
            var dia = numerodia
            return dia

        }


    }

    mes = numeroMes(numeromes)
    dia = numeroDia(numerodia)

    function image(tarefaPendentes) {

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
                    <label>Olá, {nome}!</label>
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
                            <BotoesExercicios exercicio={"Respiração Superficial"} />
                        </button>
                    </div>
                    <div id="respiracaoProfunda" >
                        <button type="button" onClick={() => { window.location.replace("TelaRespiracaoProfunda") }}>
                            <BotoesExercicios exercicio={"Respiração Profunda"} />
                        </button>

                    </div>
                    <div id="relaxamentoDoDia" >

                        <button type="button" onClick={() => { window.location.replace("TelaRelaxamento") }} >
                            <BotoesExercicios exercicio={"Relaxamento"} />
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