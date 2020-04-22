import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SpeechRecognition from "../components/SpeechRecognition";
import "../cube-style.scss";
import UploadImage from "../components/UploadImage";
import { selectPictureLabels } from "../store/picture/selectors";

export default function UploadPicture() {
  const [recording, setRecording] = useState(null);
  const labels = useSelector(selectPictureLabels);
  // const dispatch = useDispatch();
  // useEffect(() => {
  // }, [dispatch]);

  return (
    <div class="perspective">
      <label class="tab" for="tab-top">
        <img
          src={`https://cdn4.iconfinder.com/data/icons/basic-flat-ui-extra-set-200-item/76/ui_ux_minimalist_button_hint_idea_innovation-512.png`}
          class="image"
        />
      </label>
      <label class="tab" for="tab-front">
        <img
          src={`https://cdn1.iconfinder.com/data/icons/business-management-and-growth-20/64/1019-512.png`}
          class="image"
          width="40%"
        />
      </label>
      <label class="tab" for="tab-bottom">
        <img
          src={`https://cdn0.iconfinder.com/data/icons/music-and-media-player-ui-s94/96/Music_Icon_Pack_-_Outline_ab_microphone-512.png`}
          class="image"
        />
      </label>
      <input type="radio" name="tabs" id="tab-top" />
      <input type="radio" name="tabs" id="tab-front" />
      <input type="radio" name="tabs" id="tab-bottom" />

      <div class="cube">
        <div class="tab-content">
          <h1>LABELS</h1>
          {labels.map((label) => (
            <div>{label}</div>
          ))}
        </div>
        <div class="tab-content">
          <UploadImage />
          <img style={{ width: "30%", margin: "20px", borderRadius: "8px" }} />
          <br />
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
              START RECORDING
            </button>
          ) : null}
        </div>
        <div class="tab-content">
          <h1>RECORDING</h1>
          <div>{recording}</div>
        </div>
      </div>
    </div>
  );
}
