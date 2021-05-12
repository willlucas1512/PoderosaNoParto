import React from 'react';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import ConteudoTelaHome from '../../componentes/ConteudoTelaHome';
import HeaderTelaHome from '../../componentes/Header/HeaderTelaHome'
import Footer from '../../componentes/Footer'

class Home extends React.Component {
    render() {
        return (

            <>

                <HeaderTelaHome />
                <ConteudoTelaHome />
                <Footer />

            </>

        )
    }

}

export default Home;
