import React, { useState, useContext } from "react";
import * as S from './styles.js'
import api from '../../services/api';
import StoreContext from './../Store/Context'
import * as IoIcons from 'react-icons/io5';

function ConteudoTelaResetarSenha() {

    const initialUserState = {

        senha: "",
        confirmarSenha: ""

    };


    const [values, setValues] = useState(initialUserState);
    const { idUsuarioReset, setIdUsuarioReset } = useContext(StoreContext);

    if (!idUsuarioReset) {

        window.location.replace("/")
    }

    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    const saveUserSenha = async () => {

        if (values.senha === values.confirmarSenha) {

            var data = { senha: values.senha }

            await api.put(`/user/senha/${idUsuarioReset}`, data)

                .then(response => {
                    setValues({ senha: response.data.senha });
                    setIdUsuarioReset("")
                    window.location.replace("/")
                })
                .catch(e => {
                    console.log(e);
                });

        }

        else {

            console.log("senha não conferem")
        }


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

            return <IoIcons.IoEyeSharp size="40" />
        else

            return <IoIcons.IoEyeOff size="40" />



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

            return <IoIcons.IoEyeSharp size="40" />
        else

            return <IoIcons.IoEyeOff size="40" />



    }


    return (
        <div>
            <S.Container >

                <S.NovaSenha>
                    <S.TopSide>
                        <a > Gere uma nova senha </a>
                    </S.TopSide>
                    <S.Centro >


                        <div id="senhas">
                            <input name="senha"
                                type={mostrarSenha}
                                onChange={onChange}
                                value={values.senha}
                                placeholder="Senha">

                            </input>
                            <button onClick={mostrarASenha}>

                                {iconeSenha()}
                            </button>
                        </div>

                        <div id="senhas">
                            <input
                                name="confirmarSenha"
                                type={mostrarConfirmarSenha}
                                onChange={onChange}
                                value={values.confirmarSenha}
                                placeholder="Confirmar Senha">

                            </input>
                            <button onClick={mostrarOConfirmarSenha}>

                                {iconeConfirmarSenha()}
                            </button>

                        </div>


                    </S.Centro>
                    <S.BottomSide >

                        <button className="btnNovaSenha" onClick={saveUserSenha}> Alterar Senha </button>
                    </S.BottomSide>
                </S.NovaSenha>
            </S.Container>

        </div>

    )

}

export default ConteudoTelaResetarSenha;