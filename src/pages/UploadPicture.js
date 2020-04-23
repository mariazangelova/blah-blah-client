import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SpeechRecognition from "../components/SpeechRecognition";
import "../cube-style.scss";
import UploadImage from "../components/UploadImage";
import { selectLabels } from "../store/picture/selectors";
import { selectStoryArray } from "../store/story/selectors";

export default function UploadPicture() {
  const [recording, setRecording] = useState(null);
  const labels = useSelector(selectLabels);
  const speech = useSelector(selectStoryArray);
  //console.log("speech", speech);
  // const dispatch = useDispatch();
  // useEffect(() => {
  // }, [dispatch]);
  //const match = speech.some((r) => labels.includes(r));
  const match = speech.filter((word) => labels.includes(word));

  return (
    <div class="perspective">
      <label class="tab" for="tab-top">
        <img
          src={`https://cdn4.iconfinder.com/data/icons/basic-flat-ui-extra-set-200-item/76/ui_ux_minimalist_button_hint_idea_innovation-512.png`}
          class="image"
          alt="top"
        />
      </label>
      <label class="tab" for="tab-front">
        <img
          src={`https://cdn1.iconfinder.com/data/icons/business-management-and-growth-20/64/1019-512.png`}
          class="image"
          width="40%"
          alt="front"
        />
      </label>
      <label class="tab" for="tab-bottom">
        <img
          src={`https://cdn0.iconfinder.com/data/icons/music-and-media-player-ui-s94/96/Music_Icon_Pack_-_Outline_ab_microphone-512.png`}
          class="image"
          alt="bottom"
        />
      </label>
      <input type="radio" name="tabs" id="tab-top" />
      <input type="radio" name="tabs" id="tab-front" />
      <input type="radio" name="tabs" id="tab-bottom" />

      <div class="cube">
        <div class="tab-content">
          <h1 style={{ margin: "50px" }}>LABELS</h1>
          {labels.map((label, index) => (
            <div key={index} style={{ color: "black", margin: "5px" }}>
              {label}
            </div>
          ))}
        </div>
        <div class="tab-content">
          <UploadImage />
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
            >
              START RECORDING
            </button>
          ) : null}
        </div>
        <div class="tab-content">
          {speech.length > 1 ? (
            <div>
              <h1 style={{ margin: "50px" }}>WORDS GUESSED:</h1>
              {match.map((word, index) => (
                <div
                  key={index}
                  style={{ color: "black", margin: "5px", fontSize: "20px" }}
                >
                  {word}
                </div>
              ))}
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
