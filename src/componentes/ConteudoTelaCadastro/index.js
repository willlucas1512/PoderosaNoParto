import React, { useState } from "react";
import * as S from './styles.js'
import api from '../../services/api';
import * as IoIcons from 'react-icons/io5';

import Cep from "react-simple-cep-mask";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
function ConteudoTelaCadastro() {

    const initialUserState = {
        id: null,
        nome: "",
        senha: "",
        sexo: "",
        cep: "",
        email: "",
        raca: ""

    };
    const [user, setUser] = useState(initialUserState);
    const [dataNasc, setDataNasc] = useState(null);
    const [ultMest, setUltMest] = useState(null);
    const [cpfCadastro, setCpfCadastro] = useState(null);
    const [cep, setCep] = useState("");
    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    const handlechangeCpf = event => {
        setCpfCadastro(cpfMask(event.target.value))

    }

    const cpfMask = value => {
        return value
            .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
            .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    }




    const saveUser = async () => {




        var data = {
            nome: user.nome,
            cpf: cpfCadastro,
            senha: user.senha,
            sexo: user.sexo,
            cep: cep,
            email: user.email,
            raca: user.raca,
            dataNasc: dataNasc,
            ultMest: ultMest

        }
        console.log(data)

        await api.post("/user/", data)

            .then(response => {
                setUser({

                    nome: response.data.nome,
                    cpf: response.data.cpf,
                    senha: response.data.senha,
                    sexo: response.data.sexo,
                    cep: response.data.cep,
                    email: response.data.email,
                    raca: response.data.raca,
                    dataNasc: response.data.dataNasc,
                    ultMest: response.data.ultMest


                });
                alert("Cadastro efetuado com sucesso")
                window.location.replace("/")
            })
            .catch((error) => {

                alert(error.response.data)
            });


    };

    const [mostrarSenha, setMostrarSenha] = useState("password");
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState("password");

    function mostrarASenha() {

        if (mostrarSenha == "text") {

            setMostrarSenha("password")
        } else {
            setMostrarSenha("text")
        }
    }

    function iconeSenha() {

        if (mostrarSenha === "text")

            return <IoIcons.IoEyeSharp color="#707070 " size="30" />
        else

            return <IoIcons.IoEyeOff color="#707070" size="30" />



    }

    function mostrarOConfirmarSenha() {

        if (mostrarConfirmarSenha == "text") {

            setMostrarConfirmarSenha("password")
        } else {
            setMostrarConfirmarSenha("text")
        }
    }

    function iconeConfirmarSenha() {

        if (mostrarConfirmarSenha === "text")

            return <IoIcons.IoEyeSharp color="#707070" size="30" />
        else

            return <IoIcons.IoEyeOff color="#707070" size="30" />



    }

    return (
        < div >
            <S.Container >

                <S.Cadastro >

                    <S.TopSide >

                        <span> Cadastro </span>
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

                            < input
                                className="inputCadastro"
                                placeholder="CPF"
                                id="cpf"
                                required value={cpfCadastro}
                                onChange={handlechangeCpf}
                                name="cpf" >

                            </input>
                            <div id="senhas">
                                <input type={mostrarSenha}
                                    className="inputCadastro"
                                    placeholder="Senha"
                                    id="senha"
                                    required value={user.senha}
                                    onChange={handleInputChange}
                                    name="senha" >


                                </input>
                                <button onClick={mostrarASenha}>

                                    {iconeSenha()}
                                </button>
                            </div>
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


                            <DatePicker
                                selected={dataNasc}
                                dateFormat="dd/MM/yyyy"

                                onChange={date => setDataNasc(date)}
                                className="inputCadastro"
                                disabled={false}
                                placeholderText="Data de Nascimento"
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                popperModifiers={{
                                    offset: "5px, 3px"

                                }}
                            />
                        </S.Form1>

                        <S.Form2 >
                            <Cep
                                className="inputCadastro"
                                value={cep}
                                placeholder="Cep"
                                onChange={(cep) => setCep(cep)}
                            />

                            < input type="text"
                                className="inputCadastro"
                                placeholder="E-mail"
                                id="email"
                                required value={user.email}
                                onChange={handleInputChange}
                                name="email"

                            >
                            </input>
                            <div id="senhas">
                                <input type={mostrarConfirmarSenha}
                                    className="inputCadastro"
                                    placeholder="Confirmar Senha" >

                                </input>
                                <button onClick={mostrarOConfirmarSenha}>

                                    {iconeConfirmarSenha()}
                                </button>
                            </div>
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


                            <DatePicker
                                selected={ultMest}
                                dateFormat="dd/MM/yyyy"

                                onChange={date => setUltMest(date)}
                                className="inputCadastro"
                                disabled={false}
                                placeholderText="Data da Última Mestruação (Início)"
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                popperModifiers={{
                                    offset: "5px, 3px"

                                }}
                            />

                        </S.Form2>

                    </S.Centro>

                    <S.BottomSide >

                        <h3 > Ao clicar em Cadastrar, você concorda com nossa < a href="/TelaPoliticaDePrivacidade" >
                            {" Politica de Privacidade "} </a>  e aceita nossos <a href="/TelaTermosECondicoes" >Termos e Condições</a > . </h3>

                        <button className="btnCadastrar" onClick={saveUser} > Cadastrar </button>

                    </S.BottomSide>

                </S.Cadastro>

            </S.Container>

        </div>

    )

}

export default ConteudoTelaCadastro;