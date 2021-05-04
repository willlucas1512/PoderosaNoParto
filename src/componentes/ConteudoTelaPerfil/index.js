import React, { useState, useContext, useEffect } from "react";
import * as S from './styles.js'
import api from '../../services/api';
import StoreContext from './../Store/Context';

function ConteudoTelaPerfil() {


    const initialUserState = {

        nome: "",
        cpf: "",
        sexo: "",
        cep: "",
        email: "",
        raca: "",
        dataNasc: "",
        ultMest: ""

    };

    const [user, setUser] = useState(initialUserState);
    const { idUsuario } = useContext(StoreContext);


    const PerfilUser = async () => {

        await api.post(`/user/perfil/${idUsuario}`)

            .then(response => {

                function converterData(dataDoBanco) {
                    const dataNascPrimeiroDivisao = dataDoBanco.split("T")
                    const dataNascSegundaDivisao = dataNascPrimeiroDivisao[0].split("-")
                    const dataNascFinal = (dataNascSegundaDivisao[2] + "/" + dataNascSegundaDivisao[1] + "/" + dataNascSegundaDivisao[0])
                    return dataNascFinal
                }
                var dataBanco = {

                    nome: response.data.nome,
                    cpf: response.data.cpf,
                    sexo: response.data.sexo,
                    cep: response.data.cep,
                    email: response.data.email,
                    raca: response.data.raca,
                    dataNasc: response.data.dataNasc,
                    ultMest: response.data.ultMest,


                };
                dataBanco.dataNasc = converterData(dataBanco.dataNasc)
                dataBanco.ultMest = converterData(dataBanco.ultMest)
                setUser(dataBanco)



            })
            .catch(e => {

                console.log("Erro ao carregar perfil");
            });

    };

    useEffect(() => { PerfilUser() }, 1)
    return (
        < div >
            <S.Container >

                <S.Perfil >

                    <S.TopSide >

                        <a> Perfil </a>
                    </S.TopSide>
                    <S.Centro >
                        <S.Form1 >
                            <label className="labelPerfil"  > Nome: {user.nome} </label>
                            <label className="labelPerfil"  > CPF: {user.cpf} </label>
                            <label className="labelPerfil"  > Sexo: {user.sexo} </label>
                            <label className="labelPerfil"  >Data Nascimento: {user.dataNasc} </label>

                        </S.Form1>

                        <S.Form2 >
                            <label className="labelPerfil"  > CEP: {user.cep} </label>
                            <label className="labelPerfil"  > Email: {user.email} </label>
                            <label className="labelPerfil"  > Raça/Cor: {user.raca} </label>
                            <label className="labelPerfil"  > Última Mestruação: {user.ultMest} </label>

                        </S.Form2>

                    </S.Centro>

                    <S.BottomSide >


                        <button className="btnEditarPerfil" onClick={() => { window.location.replace("TelaEditarPerfil") }} > Editar Perfil </button>

                    </S.BottomSide>

                </S.Perfil>

            </S.Container>

        </div>

    )

}

export default ConteudoTelaPerfil;