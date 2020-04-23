import React from "react";
import { useSelector } from "react-redux";
import "../cube-style.scss";
import WordCounter from "../components/WordCounter";
import { selectStory } from "../store/story/selectors";
import { selectSynonyms } from "../store/word/selectors";

export default function Review() {
  const story = useSelector(selectStory);
  const synonyms = useSelector(selectSynonyms);
  return (
    <div className="perspective">
      <label className="tab" htmlFor="tab-top">
        <img
          src={`https://cdn4.iconfinder.com/data/icons/basic-flat-ui-extra-set-200-item/76/ui_ux_minimalist_button_hint_idea_innovation-512.png`}
          className="image"
          alt="top"
        />
      </label>
      <label className="tab" htmlFor="tab-front"></label>
      <label className="tab" htmlFor="tab-bottom">
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
          <h1 style={{ margin: "50px" }}>HINT</h1>
          <WordCounter />
          {synonyms && synonyms.length > 1 ? (
            <p>
              synonyms:{" "}
              {synonyms.map((synonym, index) => (
                <span key={index}>{synonym} - </span>
              ))}
            </p>
          ) : (
            <p>No synonyms for unrepeated words nor weird ones.</p>
          )}
        </div>
        <div className="tab-content">
          <h1 style={{ margin: "50px" }}>REVIEW</h1>
          <p>If you want to see the transcription of the recording,</p>
          <p> click on the microphone.</p>
          <p>If you want to get some hints about your speech, </p>
          <p> go to the lightbulb.</p>
        </div>
        <div className="tab-content">
          <h1 style={{ margin: "50px" }}>TRANSCRIPTION</h1>
          <p>{story}</p>
        </div>
      </div>
    </div>
  );
}
