import React, { useState } from "react";
//import { useSelector } from "react-redux";
import SpeechRecognition from "../components/SpeechRecognition";
// import Word from "../components/Word";
import "../cube-style.scss";

export default function WordStory() {
  const [recording, setRecording] = useState(null);

  return (
    <div class="perspective">
      <label class="tab" for="tab-top">
        <p></p>
        <h1></h1>
        <p></p>
        <img
          src={`https://cdn4.iconfinder.com/data/icons/basic-flat-ui-extra-set-200-item/76/ui_ux_minimalist_button_hint_idea_innovation-512.png`}
          width="50%"
        />
      </label>
      <label class="tab" for="tab-front">
        WORD
      </label>
      <label class="tab" for="tab-bottom">
        <p></p>
        <h1></h1>
        <img
          src={`https://cdn0.iconfinder.com/data/icons/music-and-media-player-ui-s94/96/Music_Icon_Pack_-_Outline_ab_microphone-512.png`}
          width="50%"
        />
      </label>
      <input type="radio" name="tabs" id="tab-top" />
      <input type="radio" name="tabs" id="tab-front" />
      <input type="radio" name="tabs" id="tab-bottom" />

      <div class="cube">
        <div class="tab-content">
          <h1>TOP CONTENT</h1>
          <p>THIS IS AWESOME</p>
        </div>
        <div class="tab-content">
          <h1>WORD</h1>
          {recording === null ? (
            <button
              className="button"
              onClick={() =>
                setRecording(
                  <div>
                    <SpeechRecognition />
                  </div>
                )
              }
              className="button"
            >
              BEGIN A STORY
            </button>
          ) : null}
        </div>
        <div class="tab-content">
          <h1>RECORDING</h1>
          <p>{recording}</p>
        </div>
      </div>
    </div>
  );
}
