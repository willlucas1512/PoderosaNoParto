import React, { useState } from "react";
import * as S from './styles.js'
import api from '../../services/api';



function ConteudoTelaSobreOSite() {



    return (
        < div >
            <S.Container >

                <S.Conteudo >

                    <S.TopSide >

                        <a >  Sobre o Site <br /> </a>
                    </S.TopSide>
                    <br />
                    <S.Centro >
                        <h3>
                            <ul>
                                <p> <a> Poderosa no Parto </a>
                            é uma plataforma criada com o objetivo de empoderar a pessoa gestante para o enfrentamento do desconforto durante o trabalho de parto, trazendo informações importantes para ajudar a tomar decisões
                            seguras e saudáveis para o parto natural.</p>
                                <span>
                                    <p><a> Oferece as seguintes funções: </a> </p>

                                    <p>-Ensino sobre exercícios respiratórios e de relaxamento muscular; </p>
                                    <p>-Acompanhamento dos exercícios com lembretes diários; </p>
                                    <p>-Apresentação gráfica do avanço nas tarefas; </p>
                                    <p>-Informações adicionais, com orientações para os exercícios de treinamento durante a gestação. </p>
                                </span>
                            </ul>
                        </h3>
                    </S.Centro>

                    <S.BottomSide >

                        <h3>
                            <p> O conteúdo aprensentado faz parte do curso
                                <a href="http://nepae.uff.br/2020/07/08/preparo-para-o-parto-e-aleitamento/"> Preparo para o Parto e Aleitamento </a>,
                                oferecido pelo NEPAE - Núcleo de Estudos e Pesquisas sobre as Atividades de Enfermagem e pelo NESEN
                                 - Núcleo  de Estudos sobre Saúde e Etnia Negra, da UFF - Universidade Federal Fluminense.
                                 O site é resultado de um esforço conjunto entre profissionais de saúde e TI,
                                  estudantes da UFRJ - Universidade Federal do Rio de Janeiro,
                                  pesquizadoras da UFF e UNIP - Universidade Paulista.
                          </p>
                        </h3>

                    </S.BottomSide>

                </S.Conteudo>

            </S.Container>

        </div>

    )

}

export default ConteudoTelaSobreOSite;