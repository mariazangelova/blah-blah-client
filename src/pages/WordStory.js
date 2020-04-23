import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SpeechRecognition from "../components/SpeechRecognition";
import "../cube-style.scss";
import { fetchRandomWord } from "../store/word/actions";
import { selectRandomWord, selectDefinition } from "../store/word/selectors";
import { selectStoryArray } from "../store/story/selectors";

export default function WordStory() {
  const [recording, setRecording] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomWord());
  }, [dispatch]);
  const randomWord = useSelector(selectRandomWord);
  const definition = useSelector(selectDefinition);
  const speech = useSelector(selectStoryArray);

  //console.log("recording", recording);
  return (
    <div className="perspective">
      <label className="tab" for="tab-top">
        <img
          src={`https://cdn4.iconfinder.com/data/icons/basic-flat-ui-extra-set-200-item/76/ui_ux_minimalist_button_hint_idea_innovation-512.png`}
          className="image"
          alt="top"
        />
      </label>
      <label className="tab" for="tab-front">
        WORD
      </label>
      <label className="tab" for="tab-bottom">
        <img
          src={`https://cdn0.iconfinder.com/data/icons/music-and-media-player-ui-s94/96/Music_Icon_Pack_-_Outline_ab_microphone-512.png`}
          className="image"
          alt="bottom"
        />
      </label>
      <input type="radio" name="tabs" id="tab-top" />
      <input type="radio" name="tabs" id="tab-front" />
      <input type="radio" name="tabs" id="tab-bottom" />

      <div className="cube">
        <div className="tab-content">
          <h1>DEFINITION</h1>
          <p>{definition}</p>
        </div>
        <div className="tab-content">
          <h2>{randomWord}</h2>
          <br />
          {recording === null && definition ? (
            <button
              className="button"
              onClick={() =>
                setRecording(
                  <div>
                    <SpeechRecognition />
                  </div>
                )
              }
            >
              START RECORDING
            </button>
          ) : null}
        </div>
        <div className="tab-content">
          {speech.length > 1 ? (
            <div>
              <Link to="/review">
                <button className="button-review">REVIEW</button>
              </Link>
            </div>
          ) : (
            <div>
              <h1 style={{ margin: "50px" }}>RECORDING</h1>
              <div>{recording}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
