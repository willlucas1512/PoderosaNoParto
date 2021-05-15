import React, { useState, useContext } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as S from './styles.js'
import Audio from './../../audios/Música Relaxante.mp3'
import AudioPlayer1 from "../AudioPlayer1"



function SongNavBar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);





    return (

        <S.Container


        >

            <IconContext.Provider value={{ color: '#DAA520' }}>

                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <RiIcons.RiVolumeUpFill size={50} onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

                    <div className="caixa">
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle'>
                                <Link to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className='nav-text'>



                                <label className="inputLogin" >Música de fundo</label>


                                <AudioPlayer1
                                    audio={Audio}
                                    autoplay={true}
                                    idPlayer={"myaudio"}
                                    volumeAudio={0.3}
                                />
                            </li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </S.Container>
    );
}

export default SongNavBar;
