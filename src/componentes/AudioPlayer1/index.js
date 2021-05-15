import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer1 = (props) => (

    <ReactAudioPlayer
        src={props.audio}
        autoPlay={props.autoplay}
        controls
        id={props.idPlayer}
        volume={props.volumeAudio}
    />
);
export default AudioPlayer1