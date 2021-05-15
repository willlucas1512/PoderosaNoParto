import React, { useContext } from 'react';
import * as S from './styles.js'
import StoreContext from './../Store/Context';
import api from '../../services/api';
import AudioPlayer1 from "../AudioPlayer1"
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


        var data = {
            titulo: titulo,
            cpf: cpf,
            duracao: duracao,
            usuarioDaTarefa: idUsuario,

        };

        await api.post("/task/", data)
            .then(response => {


                console.log(response.data);
                alert("Parabens!")
                window.location.replace("/TelaAtividade")
            })
            .catch(e => {
                alert("Erro ao cadastrar a Atividade")
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
                        <di>

                        </di>
                        <label>

                            <p>{this.props.exercicio}.   Vamos Praticar? </p>

                            <span>{hours} : {minutes} : {seconds}</span>


                            <AudioPlayer1
                                audio={this.props.audio}
                                autoplay={false}
                                idPlayer={"player"}
                                volumeAudio={1}
                            />


                        </label>


                        {this.state.timerOn === false && this.state.timerTime === 0 && (
                            <button className={"buttonExercicios"} type="button" onClick={this.startTimer}>Iniciar</button>
                        )}
                        {this.state.timerOn === true && (
                            <button className={"buttonExercicios"} type="button" onClick={this.stopTimer}>Parar</button>
                        )}
                        {this.state.timerOn === false && this.state.timerTime > 0 && (
                            <button className={"buttonExercicios"} type="button" onClick={this.startTimer}>Retornar</button>
                        )}
                        {
                            <button className={"buttonExercicios"} type="button" onClick={() => { this.concluirExercicicio(this.props.exercicio, duracao) }}>Concluir</button>
                        }


                    </S.CenterSide>

                </S.Container>
            </div>

        )
    }
}

export default ConteudoTelasExercicios;
