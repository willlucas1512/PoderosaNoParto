import React, { useState, useContext } from "react";
import * as S from './styles.js'
import api from '../../services/api';
import StoreContext from './../Store/Context'

function ConteudoTelaResetarSenha() {

    const initialUserState = {

        senha: "",
        confirmarSenha: ""

    };


    const [values, setValues] = useState(initialUserState);
    const { idUsuario } = useContext(StoreContext);

    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    const saveUserSenha = async () => {
        if (values.senha === values.confirmarSenha) {
            var data = {
                senha: values.senha,


            }

            await api.put(`/user/${idUsuario}`, data)

                .then(response => {
                    setValues({

                        //  id: response.data.id,
                        senha: response.data.senha,




                    });

                    console.log(response.data);
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


    return (
        <div>
            <S.Container >

                <S.NovaSenha>
                    <S.TopSide>
                        <a > Gere uma nova senha </a>
                    </S.TopSide>
                    <S.Centro >



                        <input name="senha" type="text" onChange={onChange} value={values.senha} placeholder="Senha"></input>
                        <input name="confirmarSenha" type="text" onChange={onChange} value={values.confirmarSenha} placeholder="Confirmar Senha"></input>





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