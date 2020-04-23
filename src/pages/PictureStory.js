import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SpeechRecognition from "../components/SpeechRecognition";
import "../cube-style.scss";
import { fetchPicture } from "../store/picture/actions";
import {
  selectPicture,
  selectPictureDescription,
} from "../store/picture/selectors";
//import { selectStoryArray } from "../store/story/selectors";
import { newStory } from "../store/story/actions";
import { selectNewStory } from "../store/story/selectors";

export default function PictureStory() {
  const [recording, setRecording] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPicture());
    dispatch(newStory());
  }, [dispatch]);
  const randomPicture = useSelector(selectPicture);
  const description = useSelector(selectPictureDescription);
  //const speech = useSelector(selectStoryArray);
  const isNew = useSelector(selectNewStory);

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
        <img
          src={`https://cdn1.iconfinder.com/data/icons/business-management-and-growth-20/64/1019-512.png`}
          className="image"
          width="40%"
          alt="front"
        />
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
          <h1>DESCRIPTION</h1>
          {description === null ? (
            <p>Sorry, this image has no description.</p>
          ) : (
            <p>{description}</p>
          )}
        </div>
        <div className="tab-content">
          <img
            src={randomPicture}
            alt="random"
            style={{ width: "30%", margin: "20px", borderRadius: "8px" }}
          />
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
        <div className="tab-content">
          {isNew === true ? (
            <div>
              <h1 style={{ margin: "50px" }}>RECORDING</h1>
              <div>{recording}</div>
            </div>
          ) : (
            <div style={{ margin: "40px" }}>
              <Link to="/review">
                <button className="button-review">REVIEW</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
