import React, { useState, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from "react-icons/md";
import { Link } from 'react-router-dom';
import StoreContext from './../Store/Context';
import { IconContext } from 'react-icons';
import * as S from './styles.js'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const { setToken } = useContext(StoreContext);


    return (
        <S.Container >
            <IconContext.Provider value={{ color: '#DAA520' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars size={50} onClick={showSidebar} />
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


                            <Link to={'/TelaPerfil'} >

                                <a > <MdIcons.MdAccountCircle /></a>
                                <span >{'Editar Perfil'}</span>
                            </Link>


                            <Link to={'/'} onClick={() => setToken(null)} >

                                <a > <AiIcons.AiOutlineExport /></a>
                                <span >{'Sair'}</span>
                            </Link>


                        </li>

                    </ul>
                </nav>
            </IconContext.Provider>
        </S.Container>
    );
}

export default Navbar;
