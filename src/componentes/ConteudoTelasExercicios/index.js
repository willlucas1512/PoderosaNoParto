import React, { useContext } from 'react';
import * as S from './styles.js'
import StoreContext from './../Store/Context';
import api from '../../services/api';

class ConteudoTelasExercicios extends React.Component {

    static contextType = StoreContext


    constructor(props) {
        super(props);
        this.state = {
            timerOn: false,
            timerStart: 0,
            timerTime: 0,

        };


    }


    startTimer = () => {

        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        })

        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            })
        }, 10)

        document.getElementById('player').play()
    };

    stopTimer = () => {
        this.setState({ timerOn: false })
        clearInterval(this.timer)
        document.getElementById('player').pause()
    };

    concluirExercicicio = async (titulo, duracao) => {

        const idUsuario = this.context.idUsuario
        const cpf = this.context.cpf
        const date = new Date()
        const datamenosfuso = new Date(date.valueOf() - date.getTimezoneOffset() * 60000)
        const dataConvertida = datamenosfuso.toISOString().replace(/\ .\d{3}Z$/, '')

        var data = {
            titulo: titulo,
            cpf: cpf,
            duracao: duracao,
            finalizada: dataConvertida,
            usuarioDaTarefa: idUsuario,

        };

        await api.post("/task/", data)
            .then(response => {


                console.log(response.data);
                window.location.replace("/TelaAtividade")
            })
            .catch(e => {
                console.log("Erro ao cadastrar")
            });


    };

    render() {

        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        let duracao = (hours + ":" + minutes + ":" + seconds)

        return (
            <div>
                <S.Container >

                    <S.CenterSide >


                        <label>

                            <a>{this.props.exercicio}.   Vamos Praticar? </a>

                            <span>{hours} : {minutes} : {seconds}</span>

                            <audio id="player" controls="controls">

                                <source src={this.props.video} type="video/mp4" />

                            </audio>

                        </label>


                        {this.state.timerOn === false && this.state.timerTime === 0 && (
                            <button type="button" onClick={this.startTimer}>Iniciar</button>
                        )}
                        {this.state.timerOn === true && (
                            <button type="button" onClick={this.stopTimer}>Parar</button>
                        )}
                        {this.state.timerOn === false && this.state.timerTime > 0 && (
                            <button type="button" onClick={this.startTimer}>Retornar</button>
                        )}
                        {
                            <button type="button" onClick={() => { this.concluirExercicicio(this.props.exercicio, duracao) }}>Concluir</button>
                        }


                    </S.CenterSide>

                </S.Container>
            </div>

        )
    }
}

export default ConteudoTelasExercicios;
