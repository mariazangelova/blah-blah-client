import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import { storeStory } from "../store/story/actions";

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
  startListening,
  stopListening,
  browserSupportsSpeechRecognition,
}) => {
  const dispatch = useDispatch();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  startListening();
  const stopRecording = () => {
    const story = finalTranscript;
    resetTranscript();
    stopListening();
    dispatch(storeStory(story));
  };
  return (
    <div className="center">
      <p>{transcript}</p>
      <button className="stop-button" onClick={stopRecording}>
        STOP
      </button>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);
