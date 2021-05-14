import React, { useState, useContext } from 'react';
import * as S from './styles.js'
import api from '../../services/api';
import StoreContext from './../Store/Context'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function initialState() {
    return { email: '' }
}


function ConteudoTelaEsqueceuSenha() {
    const { setIdUsuarioReset } = useContext(StoreContext);
    const [values, setValues] = useState(initialState);
    const [dataNasc, setDataNasc] = useState(null);
    const [cpfEsqueceuSenha, setCpfEsqueceuSenha] = useState(null);
    //Função onChange atualiza os valores dos inputs 
    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }
    const onChangeCpf = event => {
        setCpfEsqueceuSenha(cpfMask(event.target.value))

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
        if (!cpfEsqueceuSenha)
            return alert('cpf é obrigatório')

        else if (!values.email)
            return alert('email é obrigatório')

        else if (!dataNasc)
            return alert('Data de Nascimento é obrigatório')
        else {
            await api.post("/user/" + `${cpfEsqueceuSenha}` + "/" + `${values.email}` + "/" + `${dataNasc}`)

                .then((response) => {
                    if (response.data.valor === true) {
                        setValues(initialState)
                        setIdUsuarioReset(response.data.idUsuario)
                        alert('Dados confirmados!')
                        return window.location.replace('/TelaResetarSenha')
                    }

                })
                .catch((error) => {

                    alert(error.response.data)

                });

        }

    }


    return (
        <div>
            <S.Container >

                <S.NovaSenha>
                    <S.TopSide>
                        <span > Confirme seus dados </span>
                    </S.TopSide>
                    <S.Centro >


                        <input name="cpf" className="inputNovaSenha" onChange={onChangeCpf} value={cpfEsqueceuSenha} placeholder="CPF"></input>
                        <input name="email" type="text" className="inputNovaSenha" onChange={onChange} value={values.email} placeholder="E-mail"></input>


                        <DatePicker
                            selected={dataNasc}
                            dateFormat="dd/MM/yyyy"

                            onChange={date => setDataNasc(date)}
                            className="inputNovaSenha"
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