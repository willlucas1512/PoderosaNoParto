import React from 'react';


import TelaCadastro from './../views/TelaCadastro'
import TelaEscolhaExercicio from './../views/TelaEscolhaExercicio'
import TelaProgresso from './../views/TelaProgresso'
import TelaHome from './../views/Home'
import TelaAtividade from './../views/TelaAtividade'
import TelaPerfil from './../views/TelaPerfil'
import TelaRespiracaoProfunda from './../views/TelaRespiracaoProfunda'
import TelaRespiracaoSuperficial from './../views/TelaRespiracaoSuperficial'
import TelaPoliticaDePrivacidade from './../views/TelaPoliticaDePrivacidade'
import TelaTermosECondicoes from './../views/TelaTermosECondicoes'

import TelaFaleComAGente from './../views/TelaFaleComAGente'
import TelaMais from './../views/TelaMais'
import TelaRelaxamento from './..//views/TelaRelaxamento'
import TelaEsqueceuSenha from './..//views/TelaEsqueceuSenha'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import StoreProvider from './../componentes/Store/Provider';
import RoutesPrivate from './Private/Private'


class Routes extends React.Component {
    render() {

        return (<Router >
            <div >
                <StoreProvider>
                    <Switch >

                        <Route exact path="/" ><TelaHome /> </Route>
                        <Route path="/TelaCadastro" > <TelaCadastro /> </Route>
                        <Route path="/TelaPoliticaDePrivacidade" ><TelaPoliticaDePrivacidade /> </Route>
                        <Route path="/TelaTermosECondicoes" ><TelaTermosECondicoes /> </Route>
                        <Route path="/TelaFaleComAGente" ><TelaFaleComAGente /> </Route>
                        <Route path="/TelaEsqueceuSenha" ><TelaEsqueceuSenha /> </Route>
                        <RoutesPrivate path="/TelaPerfil" ><TelaPerfil /> </RoutesPrivate>
                        <RoutesPrivate path="/TelaRespiracaoProfunda" ><TelaRespiracaoProfunda /> </RoutesPrivate>
                        <RoutesPrivate path="/TelaRespiracaoSuperficial" ><TelaRespiracaoSuperficial /> </RoutesPrivate>
                        <RoutesPrivate path="/TelaRelaxamento" ><TelaRelaxamento /> </RoutesPrivate>
                        <RoutesPrivate path="/TelaEscolhaExercicio" ><TelaEscolhaExercicio /> </RoutesPrivate>
                        <RoutesPrivate path="/TelaMais" ><TelaMais /> </RoutesPrivate>
                        <RoutesPrivate path="/TelaAtividade" ><TelaAtividade /></RoutesPrivate>
                        <RoutesPrivate path="/TelaProgresso" ><TelaProgresso /> </RoutesPrivate>



                    </Switch>
                </StoreProvider>


            </div>

        </Router>

        )
    }
}


export default Routes;