import React, { useState } from 'react';
import * as S from './styles.js'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Popups() {


    return (
        <div>
            <Popup position="right center">
                <div>Popup content here !!</div>

            </Popup>
        </div>

    )

}

export default Popups;


