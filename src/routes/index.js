import React from 'react';


import TelaCadastro from './../views/TelaCadastro'
import TelaEscolhaExercicio from './../views/TelaEscolhaExercicio'
import TelaProgresso from './../views/TelaProgresso'
import TelaHome from './../views/Home'
import TelaAtividade from './../views/TelaAtividade'
import TelaPerfil from './../views/TelaPerfil'
import TelaEditarPerfil from './../views/TelaEditarPerfil'
import TelaRespiracaoProfunda from './../views/TelaRespiracaoProfunda'
import TelaRespiracaoSuperficial from './../views/TelaRespiracaoSuperficial'
import TelaPoliticaDePrivacidade from './../views/TelaPoliticaDePrivacidade'
import TelaTermosECondicoes from './../views/TelaTermosECondicoes'
import TelaSobreOSite from './../views/TelaSobreOSite'
import TelaFaleComAGente from './../views/TelaFaleComAGente'
import TelaMais from './../views/TelaMais'
import TelaRelaxamento from './..//views/TelaRelaxamento'
import TelaEsqueceuSenha from './..//views/TelaEsqueceuSenha'
import TelaResetarSenha from './..//views/TelaResetarSenha'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StoreProvider from './../componentes/Store/Provider';
import RoutesPrivate from './Private/Private'


class Rotas extends React.Component {
    render() {

        return (
                <StoreProvider>
                <BrowserRouter>
                    <Routes >

                        
                        <Route exact path="/" element={<TelaHome/>} />
                        <Route path="/TelaCadastro" element={<TelaCadastro />} />
                        <Route path="/TelaPoliticaDePrivacidade" element={<TelaPoliticaDePrivacidade />} />
                        <Route path="/TelaTermosECondicoes" element={<TelaTermosECondicoes />} />
                        <Route path="/TelaFaleComAGente" element={<TelaFaleComAGente />} />
                        <Route path="/TelaEsqueceuSenha" element={<TelaEsqueceuSenha />} />
                        <Route path="/TelaSobreOSite" element={<TelaSobreOSite />} />
                        <Route path="/TelaResetarSenha" element={<TelaResetarSenha />} />
                        <Route path="/TelaPerfil" element={<RoutesPrivate><TelaPerfil /></RoutesPrivate>}/>
                        <Route path="/TelaEditarPerfil" element={<RoutesPrivate><TelaEditarPerfil /></RoutesPrivate>}/>
                        <Route path="/TelaRespiracaoProfunda" element={<RoutesPrivate><TelaRespiracaoProfunda /></RoutesPrivate>}/>
                        <Route path="/TelaRespiracaoSuperficial" element={<RoutesPrivate><TelaRespiracaoSuperficial /></RoutesPrivate>}/>
                        <Route path="/TelaRelaxamento" element={<RoutesPrivate><TelaRelaxamento /></RoutesPrivate>}/>
                        <Route path="/TelaEscolhaExercicio" element={<RoutesPrivate><TelaEscolhaExercicio /></RoutesPrivate>}/>
                        <Route path="/TelaMais" element={<RoutesPrivate><TelaMais /></RoutesPrivate>}/>
                        <Route path="/TelaAtividade" element={<RoutesPrivate><TelaAtividade /></RoutesPrivate>}/>
                        <Route path="/TelaProgresso" element={<RoutesPrivate><TelaProgresso /></RoutesPrivate>}/>
                        
                        
                        
                        
                        



                    </Routes>
                    </BrowserRouter>
                </StoreProvider>


            

        )
    }
}


export default Rotas;