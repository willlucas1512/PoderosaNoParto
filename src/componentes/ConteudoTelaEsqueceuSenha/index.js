import React, { useState, useContext } from 'react';
import * as S from './styles.js'
import api from '../../services/api';
import StoreContext from './../Store/Context'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function initialState() {
    return { cpf: '', email: '' }
}

function TestaCPF(strCPF) {
    var Soma
    var Resto
    var i
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}

function ConteudoTelaEsqueceuSenha() {
    const { setIdUsuarioReset } = useContext(StoreContext);
    const [values, setValues] = useState(initialState);
    const [dataNasc, setDataNasc] = useState(null);
    //Função onChange atualiza os valores dos inputs 
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
        if (!values.cpf)
            return alert('cpf é obrigatório')

        else if (TestaCPF(values.cpf) === false)
            return alert('cpf é inválido')

        else if (!values.email)
            return alert('email é obrigatório')

        else if (!dataNasc)
            return alert('Data de Nascimento é obrigatório')
        else {
            await api.post("/user/" + `${values.cpf}` + "/" + `${values.email}` + "/" + `${dataNasc}`)

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
                        <a > Confirme seus dados </a>
                    </S.TopSide>
                    <S.Centro >


                        <input name="cpf" type="number" className="inputNovaSenha" onChange={onChange} value={values.cpf} placeholder="CPF"></input>
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