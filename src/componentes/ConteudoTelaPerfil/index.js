import React, { useState, useContext } from "react";
import * as S from './styles.js'
import api from '../../services/api';
import StoreContext from './../Store/Context';
import { getDate, getDay } from "date-fns";
import { getHours } from "date-fns/esm";


function ConteudoTelaPerfil() {
    const data = new Date()
    const datamenosfuso = new Date(data.valueOf() - data.getTimezoneOffset() * 60000)
    const dataConvertida = datamenosfuso.toISOString().replace(/\ .\d{3}Z$/, '')

    const initialUserState = {
        id: null,
        nome: "",
        cpf: "",
        sexo: "",
        cep: "",
        email: "",
        raca: "",
        dataNasc: "",
        ultMest: "",
        modificed: dataConvertida
    };

    const [user, setUser] = useState(initialUserState);
    const { idUsuario } = useContext(StoreContext);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const saveUser = async () => {
        var data = {
            nome: user.nome,
            cpf: user.cpf,
            sexo: user.sexo,
            cep: user.cep,
            email: user.email,
            raca: user.raca,
            dataNasc: `${user.dataNasc}T23:40:00.000+00:00`,
            ultMest: `${user.ultMest}T23:40:00.000+00:00`,
            modificed: user.modificed

        };
        await api.put(`/user/${idUsuario}`, data)

            .then(response => {
                setUser({

                    //  id: response.data.id,
                    nome: response.data.nome,
                    cpf: response.data.cpf,
                    sexo: response.data.sexo,
                    cep: response.data.cep,
                    email: response.data.email,
                    raca: response.data.raca,
                    dataNasc: response.data.dataNasc,
                    ultMest: response.data.ultMest,
                    modificed: response.data.modificed



                });

                console.log(response.data);
                window.location.replace("/TelaAtividade")
            })
            .catch(e => {

                console.log("Erro ao Alterar");
            });



    };



    return (
        < div >
            <S.Container >

                <S.Cadastro >

                    <S.TopSide >

                        <a> Editar Perfil </a>
                    </S.TopSide>
                    <S.Centro >
                        <S.Form1 >
                            <input type="text"
                                className="inputCadastro"
                                placeholder="Nome Completo"
                                id="nome"
                                required value={user.nome}
                                onChange={handleInputChange}
                                name="nome" >
                            </input>

                            < input type="number"
                                className="inputCadastro"
                                placeholder="CPF"
                                id="cpf"
                                required value={user.cpf}
                                onChange={handleInputChange}
                                name="cpf" >

                            </input>



                            <select type="text"
                                className="inputCadastro"
                                placeholder="Sexo"
                                id="sexo"
                                required value={user.sexo}
                                onChange={handleInputChange}
                                name="sexo" >

                                <option value="null" > Sexo </option>
                                < option value="Feminino" > Feminino </option>
                                <option value="Masculino" > Masculino </option>
                                <option value="Outro" > Outro </option>

                            </select>

                            <label className="labelCadastro" > Data de Nascimento </label>

                            < input type="date"
                                className="inputDataCadastro"
                                id="dataNasc"
                                required value={user.dataNasc}
                                onChange={handleInputChange}
                                name="dataNasc"

                            >
                            </input>
                        </S.Form1>

                        <S.Form2 >
                            <input type="text"
                                className="inputCadastro"
                                placeholder="CEP"
                                id="cep"
                                required value={user.cep}
                                onChange={handleInputChange}
                                name="cep" >

                            </input>

                            < input type="text"
                                className="inputCadastro"
                                placeholder="E-mail"
                                id="email"
                                required value={user.email}
                                onChange={handleInputChange}
                                name="email"

                            >
                            </input>



                            <select type="text"
                                className="inputCadastro"
                                placeholder="Raça/Cor"
                                id="raca"
                                required value={user.raca}
                                onChange={handleInputChange}
                                name="raca"


                            >
                                <option selected value="null" > Raça / Cor </option>
                                <option value="Preta" > Preta </option>
                                <option value="Branca" > Branca </option>
                                <option value="Parda" > Parda </option>
                                <option value="Indígena" > Indígena </option>
                                <option value="Amarela" > Amarela </option>
                            </select>

                            <label className="labelCadastro" > Última Mestruação </label>

                            <input type="date"
                                className="inputDataCadastro"
                                placeholder="Última Mestruação"
                                id="ultMest"
                                required value={user.ultMest}
                                onChange={handleInputChange}
                                name="ultMest"


                            >
                            </input>

                        </S.Form2>

                    </S.Centro>

                    <S.BottomSide >


                        <button className="btnCadastrar" onClick={saveUser} > Alterar </button>

                    </S.BottomSide>

                </S.Cadastro>

            </S.Container>

        </div>

    )

}

export default ConteudoTelaPerfil;