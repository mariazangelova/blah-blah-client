import React from "react";
//import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  finalTranscript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
};

const Dictaphone = ({
  transcript,
  resetTranscript,
  finalTranscript,
  stopListening,
  browserSupportsSpeechRecognition,
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  const stopRecording = () => {
    stopListening();
    const story = finalTranscript.split(" ");
    resetTranscript();
    console.log("STORY", story);
    console.log("TRANSCRIPT", transcript);
  };
  return (
    <div className="center">
      {/* <button onClick={resetTranscript}>
        Delete
      </button> */}
      <p>{transcript}</p>
      <button className="stop-button" onClick={stopRecording}>
        STOP
      </button>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);
