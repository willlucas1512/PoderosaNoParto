import React, { useContext } from 'react';
import * as S from './styles.js'
import logo from '../../../assets/logo.png'
import StoreContext from './../../Store/Context'
import Navbar from './../../MenuNavBar';
import SongNavBar from './../../SongNavBar';
function HeaderTelasExercicios() {

    const { numeroTarefasPendentes } = useContext(StoreContext);




    return (
        <div>
            <S.Container>

                <S.LeftSide>
                    <img src={logo} />
                    <div className="navegacoes">
                        <SongNavBar numeroTarefasPendentes={numeroTarefasPendentes} />
                        <Navbar />
                    </div>
                </S.LeftSide>


            </S.Container>
            <S.Menu>
                <a href="/TelaAtividade">Atividades</a>
                <span className="dividir" />
                <a href="/TelaProgresso">Progresso</a>
                <span className="dividir" />
                <a href="/TelaMais">Mais</a>
            </S.Menu>
        </div>

    )

}

export default HeaderTelasExercicios;
