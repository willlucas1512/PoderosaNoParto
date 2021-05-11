import React from 'react';
import * as S from './styles.js'
import Login from '../../componentes/Login'
import Image from '../../assets/logoInicial.png'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
function ConteudoTelaHome() {
    return (
        <div className="container">
            <div class="row">
                <div class="col-md-1">

                    <img src={Image} />


                </div>
                <div class="col-md-1">



                    <Login />



                </div>

            </div>

        </div>

    )

}

export default ConteudoTelaHome;
