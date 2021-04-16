import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles.js'
import StoreContext from './../Store/Context'

import api from '../../services/api';
function initialState() {
    return { cpf: '', senha: '' }
}


function Login() {

    const [values, setValues] = useState(initialState);
    const { token, setToken } = useContext(StoreContext);
    const { setIdUsuario } = useContext(StoreContext);
    const { setCpf } = useContext(StoreContext);
    const { setNomeUsuario } = useContext(StoreContext);
    const history = useHistory();

    console.log(token)

    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    async function onSubmit(event) {

        event.preventDefault();

        await api.post("/user/" + `${values.cpf}`)

            .then((response) => {

                setToken(response.data.token)
                setCpf(response.data.cpf)
                setNomeUsuario(response.data.nomeUsuario)
                setIdUsuario(response.data.idUsuario)
                setValues(initialState)
                console.log(token)
                return history.push('/TelaAtividade')


            })
            .catch(e => {
                console.log("Erro ao cadastrar")

            });

    }


    return (
        <div>
            <S.Container>

                <input name="cpf" className="inputLogin" onChange={onChange} value={values.cpf} placeholder="Digite seu CPF"></input>

                <input name="senha" type="text" className="inputLogin" onChange={onChange} value={values.senha} placeholder="Digite sua Senha"></input>
                <button type="submit" className="btnLogin" onClick={onSubmit} >Iniciar Sessão</button>
                <a href="/TelaEsqueceuSenha">Esqueceu a senha?</a>
                <span className="dividir" />
                <button className="btnCadastre_se" onClick={() => { window.location.replace("TelaCadastro") }}>Cadastre-se</button>
            </S.Container>
        </div>

    )

}

export default Login;
