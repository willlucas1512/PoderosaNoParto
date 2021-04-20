import React from 'react';
import * as S from './styles.js'


function ConteudoTelaFaleComAGente() {
    return (
        < div >
            <S.Container >

                <S.Conteudo >

                    <S.TopSide >

                        <a >  Fale com a Gente <br /> </a>
                    </S.TopSide>
                    <br />
                    <S.Centro >
                        <h3>
                            <ul>
                                <p>O conteúdo desse site está baseado no curso
                                    <a href="http://nepae.uff.br/2020/07/08/preparo-para-o-parto-e-aleitamento/"> Preparo para o Parto e Aleitamento</a>,
                                oferecido pelo NEPAE - Núcleo de Estudos e Pesquisas sobre as Atividades de Enfermagem e pelo NESEN
                                 - Núcleo  de Estudos sobre Saúde e Etnia Negra, da UFF - Universidade Federal Fluminense.

                                    </p>


                                <p>É possível entrar em contato com a coordenadora através do site do NEPAE {"&"} NESEN. Ao final da
                                <a href="http://nepae.uff.br/"> página inicial</a> você encontrará um campo para enviar mensagens, dúvidas e sugestões. Não se esqueça de indicar o assunto.
                                 </p>


                            </ul>
                        </h3>
                    </S.Centro>



                </S.Conteudo>

            </S.Container>

        </div>

    )


}

export default ConteudoTelaFaleComAGente;