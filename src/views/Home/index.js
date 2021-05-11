import React from 'react';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from '../../componentes/Login'
import Image from '../../assets/logoInicial.png'
import './styles.css'
import HeaderTelaHome from '../../componentes/Header/HeaderTelaHome'
import Footer from '../../componentes/Footer'

class Home extends React.Component {
    render() {
        return (

            <>

                <HeaderTelaHome />
                <div className="conteudo">
                    <div className="LeftSide">
                        <img src={Image} />
                    </div>
                    <div className="RightSide">
                        <Login />
                    </div>
                </div>
                <Footer />

            </>

        )
    }

}

export default Home;
