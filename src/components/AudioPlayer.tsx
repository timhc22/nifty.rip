import React, {useState, useEffect, AudioHTMLAttributes} from "react";
import {MusicNoteOutlined, MusicOffOutlined} from "@material-ui/icons";

/**
 * https://stackoverflow.com/questions/47686345/playing-sound-in-react-js
 * @param url
 * @constructor
 */
const AudioPlayer = ({ url }: any) => {

  // todo add a way to stop the error continually being called if not online

  const [audio, setAudio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.pause();
    setPlaying(false);
    setAudio(new Audio(url));
  }, [url]);

  useEffect(() => {
    // todo add loop
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return (
    <div>
      {/*<button onClick={toggle}>{playing ? "Pause" : "Play"}</button>*/}
      {!playing ?
        <MusicOffOutlined className="pointer" style={{color: "white"}} onClick={toggle} /> :
        <MusicNoteOutlined className="pointer" style={{color: "white"}} onClick={toggle} />
      }
    </div>
  );
};

export default AudioPlayer;
