import React, { useState, useContext } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from "react-icons/md";
import * as BsIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as S from './styles.js'
import StoreContext from './../Store/Context'

function BellNavBar(props) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const { respiracaoSuperficialDoDia } = useContext(StoreContext);
    const { respiracaoProfundaDoDia } = useContext(StoreContext);
    const { relaxamentoDoDia } = useContext(StoreContext);
    return (

        <S.Container
            respiracaoSuperficialDoDia={respiracaoSuperficialDoDia}
            respiracaoProfundaDoDia={respiracaoProfundaDoDia}
            relaxamentoDoDia={relaxamentoDoDia}

        >

            <IconContext.Provider value={{ color: '#DAA520' }}>
                <S.Label >
                    <label>{props.numeroTarefasPendentes}</label>
                </S.Label>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <BsIcons.BsFillBellFill size={50} onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>

                        <li className='nav-text'>

                            <Link id='respiracaoSuperficial' to={'/TelaRespiracaoSuperficial'}>
                                <a><GiIcons.GiAwareness /></a>
                                <span>{'Respiração Superficial'}</span>

                            </Link>

                            <Link id='respiracaoProfunda' to={'/TelaRespiracaoProfunda'}>
                                <a><GiIcons.GiAwareness /></a>
                                <span>{'Respiração Profunda'}</span>

                            </Link>
                            <Link id='relaxamento' to={'/TelaRelaxamento'}>
                                <a><MdIcons.MdAirlineSeatReclineExtra /></a>
                                <span>{'Relaxamento'}</span>

                            </Link>

                        </li>

                    </ul>
                </nav>
            </IconContext.Provider>
        </S.Container>
    );
}

export default BellNavBar;
