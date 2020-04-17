import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SpeechRecognition from "../components/SpeechRecognition";
// import Word from "../components/Word";
import "../cube-style.scss";
import { fetchPicture } from "../store/picture/actions";
import { selectPicture } from "../store/picture/selectors";

export default function PictureStory() {
  const [recording, setRecording] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPicture());
  }, [dispatch]);
  // const randomPicture = useSelector(selectPicture);
  // console.log("picture", randomPicture);
  const randomPicture =
    "https://images.unsplash.com/photo-1587050265310-1a2d98ccce5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
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
        <p></p>
        <h1></h1>
        <img
          src={`https://cdn1.iconfinder.com/data/icons/business-management-and-growth-20/64/1019-512.png`}
          width="40%"
        />
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
          {/* <h1>DEFINITION</h1>
          <p>{definition}</p> */}
        </div>
        <div class="tab-content">
          <img src={randomPicture} style={{ width: "30%", margin: "20px" }} />
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
          <p>{recording}</p>
        </div>
      </div>
    </div>
  );
}
