import React, { useState, useContext } from 'react';
import * as S from './styles.js'
import StoreContext from './../../componentes/Store/Context'

//nossos componentes
import Header from '../../componentes/Header/HeaderTelasMenu'
import Footer from '../../componentes/Footer'

import ConteudoTelaAtividade from '../../componentes/ConteudoTelaAtividade';

function TelaAtividade() {

    const { setRespiracaoSuperficialDoDia } = useContext(StoreContext);
    const { setRespiracaoProfundaDoDia } = useContext(StoreContext);
    const { setRelaxamentoDoDia } = useContext(StoreContext);

    const { setNumeroTarefasPendentes } = useContext(StoreContext);



    var numeroTarefasPendentes
    var tarefaRespiracaoSuperficialDoDia
    var tarefaRespiracaoProfundaDoDia
    var tarefaRelaxamentoDoDia
    var respiracaoSuperficialDoDia = false
    var respiracaoProfundaDoDia = false
    var relaxamentoDoDia = false

    setRespiracaoSuperficialDoDia(respiracaoSuperficialDoDia);
    setRespiracaoProfundaDoDia(respiracaoProfundaDoDia);
    setRelaxamentoDoDia(relaxamentoDoDia);

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
            <ConteudoTelaAtividade />

            <Footer />
        </S.Container>


    )

}

export default TelaAtividade;
