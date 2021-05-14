import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles.js'
import StoreContext from './../Store/Context'
import * as IoIcons from 'react-icons/io5';

import api from '../../services/api';
function initialState() {
    return { senha: '' }
}


function Login() {

    const [values, setValues] = useState(initialState);
    const { setToken } = useContext(StoreContext);
    const { setIdUsuario } = useContext(StoreContext);
    const { setCpf } = useContext(StoreContext);
    const { setNomeUsuario } = useContext(StoreContext);
    const [cpfLogin, setCpfLogin] = useState(null);
    const history = useHistory();

    //Função onChange atualizaos valores dos inputs 
    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }
    const onChangeCpf = event => {
        setCpfLogin(cpfMask(event.target.value))

    }
    const cpfMask = value => {
        return value
            .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
            .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    }

    //Função onSubmit envia os valores dos inputs
    // para o banco de dados
    async function onSubmit(event) {

        event.preventDefault();

        if (!cpfLogin)
            return alert('Digite seu CPF')


        else if (!values.senha)
            return alert('Digite sua senha')
        else {
            console.log(cpfLogin)
            await api.post("/user/" + `${cpfLogin}` + "/" + `${values.senha}`)

                .then((response) => {

                    setToken(response.data.token)
                    setCpf(response.data.cpf)
                    setNomeUsuario(response.data.nomeUsuario)
                    setIdUsuario(response.data.idUsuario)
                    setValues(initialState)
                    return history.push('/TelaAtividade')


                })
                .catch((error) => {
                    alert(error.response.data)
                    console.log(error.response.data)

                });
        }


    }

    const [mostrarSenha, setMostrarSenha] = useState("password");

    function mostrarASenha() {

        if (mostrarSenha == "text") {

            setMostrarSenha("password")
        } else {
            setMostrarSenha("text")
        }
    }
    function iconeSenha() {

        if (mostrarSenha === "text")

            return <IoIcons.IoEyeSharp color="#707070" size="40" />
        else

            return <IoIcons.IoEyeOff color="#707070" size="40" />



    }
    return (
        <div>
            <S.Container>
                <div id="senhas">

                    <input name="cpf" className="inputLogin" onChange={onChangeCpf} value={cpfLogin} placeholder="Digite seu CPF (Somente Números)"></input>
                </div>
                <div id="senhas">

                    <input name="senha" type={mostrarSenha} className="inputLogin" onChange={onChange} value={values.senha} placeholder="Digite sua Senha"></input>
                    <button onClick={mostrarASenha}>

                        {iconeSenha()}
                    </button>
                </div>
                <button type="submit" className="btnLogin" onClick={onSubmit} >Iniciar Sessão</button>
                <a href="/TelaEsqueceuSenha">Esqueceu a senha?</a>
                <span className="dividir" />
                <button className="btnCadastre_se" onClick={() => { window.location.replace("TelaCadastro") }}>Cadastre-se</button>
            </S.Container>
        </div>

    )

}

export default Login;
