import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles.js'
import StoreContext from './../Store/Context'
import * as IoIcons from 'react-icons/io5';

import api from '../../services/api';
function initialState() {
    return { cpf: '', senha: '' }
}


function Login() {

    const [values, setValues] = useState(initialState);
    const { setToken } = useContext(StoreContext);
    const { setIdUsuario } = useContext(StoreContext);
    const { setCpf } = useContext(StoreContext);
    const { setNomeUsuario } = useContext(StoreContext);
    const history = useHistory();

    //Função onChange atualizaos valores dos inputs 
    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    //Função onSubmit envia os valores dos inputs
    // para o banco de dados
    async function onSubmit(event) {

        event.preventDefault();

        await api.post("/user/" + `${values.cpf}` + "/" + `${values.senha}`)

            .then((response) => {

                setToken(response.data.token)
                setCpf(response.data.cpf)
                setNomeUsuario(response.data.nomeUsuario)
                setIdUsuario(response.data.idUsuario)
                setValues(initialState)
                return history.push('/TelaAtividade')


            })
            .catch(e => {
                console.log("Erro ao logar")

            });

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

            return <IoIcons.IoEyeSharp size="40" />
        else

            return <IoIcons.IoEyeOff size="40" />



    }
    return (
        <div>
            <S.Container>

                <input name="cpf" className="inputLogin" onChange={onChange} value={values.cpf} placeholder="Digite seu CPF"></input>
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
