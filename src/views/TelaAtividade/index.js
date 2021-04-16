import React, { useState, useContext, useEffect } from 'react';
import * as S from './styles.js'
import StoreContext from './../../componentes/Store/Context'
import api from '../../services/api';
//nossos componentes
import Header from '../../componentes/Header/HeaderTelasMenu'
import Footer from '../../componentes/Footer'

import ConteudoTelaAtividade from '../../componentes/ConteudoTelaAtividade';
import { GiTrumpet } from 'react-icons/gi';

function TelaAtividade() {

    const { respiracaoSuperficialDoDia, setRespiracaoSuperficialDoDia } = useContext(StoreContext);
    const { respiracaoProfundaDoDia, setRespiracaoProfundaDoDia } = useContext(StoreContext);
    const { relaxamentoDoDia, setRelaxamentoDoDia } = useContext(StoreContext);

    const { setNumeroTarefasPendentes } = useContext(StoreContext);
    const { token } = useContext(StoreContext);
    console.log(token)

    var numeroTarefasPendentes
    var tarefaRespiracaoSuperficialDoDia
    var tarefaRespiracaoProfundaDoDia
    var tarefaRelaxamentoDoDia


    const { cpf } = useContext(StoreContext);



    async function loadTasks() {

        await api.get(`/task/exercicioDoDia/${cpf}/${"Respiracao Superficial"}`)
            .then(response => {
                if (response.data !== null) {
                    setRespiracaoSuperficialDoDia(true);
                    console.log(true)
                }
                else {
                    setRespiracaoSuperficialDoDia(false);
                    console.log(false)

                }


            }


            )

        await api.get(`/task/exercicioDoDia/${cpf}/${"Respiracao Profunda"}`)
            .then(response => {
                if (response.data !== null) {
                    setRespiracaoProfundaDoDia(true);
                    console.log(true)
                }
                else {
                    setRespiracaoProfundaDoDia(false);
                    console.log(false)

                }


            }


            )


        await api.get(`/task/exercicioDoDia/${cpf}/${"Relaxamento"}`)
            .then(response => {
                if (response.data !== null) {
                    setRelaxamentoDoDia(true);
                    console.log(true)
                }
                else {
                    setRelaxamentoDoDia(false);
                    console.log(false)

                }


            }


            )


    }

    useEffect(() => {
        loadTasks();



    }, [1, loadTasks])


    if (respiracaoSuperficialDoDia == false) {
        tarefaRespiracaoSuperficialDoDia = 1
    } else {
        tarefaRespiracaoSuperficialDoDia = 0
    }

    if (respiracaoProfundaDoDia == false) {
        tarefaRespiracaoProfundaDoDia = 1
    } else {
        tarefaRespiracaoProfundaDoDia = 0
    }


    if (relaxamentoDoDia == false) {
        tarefaRelaxamentoDoDia = 1
    } else {
        tarefaRelaxamentoDoDia = 0
    }

    numeroTarefasPendentes = (tarefaRespiracaoSuperficialDoDia + tarefaRespiracaoProfundaDoDia + tarefaRelaxamentoDoDia)
    setNumeroTarefasPendentes(numeroTarefasPendentes);



    return (

        <S.Container >

            <Header />
            <ConteudoTelaAtividade tarefasPendentes={numeroTarefasPendentes} />

            <Footer />
        </S.Container>


    )

}

export default TelaAtividade;
