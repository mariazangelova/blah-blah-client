import React, { Component } from "react";
//import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
//import { selectTimer } from "../store/selectors";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
};

const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  //const timeOut = useSelector(selectTimer);
  //const story = transcript.split(" ");
  return (
    <div className="center">
      {/* <button variant="dark" onClick={resetTranscript}>
        Delete
      </button> */}
      <p>{transcript}</p>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);
