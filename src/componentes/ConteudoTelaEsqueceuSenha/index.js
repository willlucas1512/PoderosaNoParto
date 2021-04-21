import React, { useState, useContext } from 'react';
import * as S from './styles.js'
import api from '../../services/api';
import StoreContext from './../Store/Context'


function initialState() {
    return { cpf: '', email: '', dataNasc: "" }
}

function ConteudoTelaEsqueceuSenha() {
    const { setIdUsuarioReset } = useContext(StoreContext);
    const [values, setValues] = useState(initialState);
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

        await api.post("/user/" + `${values.cpf}` + "/" + `${values.email}` + "/" + `${values.dataNasc}` + "T23:40:00.000+00:00")

            .then((response) => {
                if (response.data.valor === true) {
                    setValues(initialState)
                    setIdUsuarioReset(response.data.idUsuario)
                    console.log(response.data.valor)
                    console.log(response.data.idUsuario)
                    return window.location.replace('/TelaResetarSenha')
                }

            })
            .catch(e => {
                console.log("Erro ao cadastrar aqui")
                console.log(e)
            });

    }




    return (
        <div>
            <S.Container >

                <S.NovaSenha>
                    <S.TopSide>
                        <a > Confirme seus dados </a>
                    </S.TopSide>
                    <S.Centro >


                        <input name="cpf" type="number" className="inputNovaSenha" onChange={onChange} value={values.cpf} placeholder="CPF"></input>
                        <input name="email" type="text" className="inputNovaSenha" onChange={onChange} value={values.email} placeholder="E-mail"></input>


                        <label className="labelNovaSenha" > Data de Nascimento </label>

                        <input name="dataNasc" type="date" className="inputDataNovaSenha" onChange={onChange} value={values.dataNasc} ></input>





                    </S.Centro>
                    <S.BottomSide >

                        <button className="btnNovaSenha" onClick={onSubmit} > Confirmar dados </button>
                    </S.BottomSide>
                </S.NovaSenha>
            </S.Container>

        </div>

    )

}

export default ConteudoTelaEsqueceuSenha;