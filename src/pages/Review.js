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
      <label class="tab" htmlFor="tab-top">
        <img
          src={`https://cdn4.iconfinder.com/data/icons/basic-flat-ui-extra-set-200-item/76/ui_ux_minimalist_button_hint_idea_innovation-512.png`}
          className="image"
          alt="top"
        />
      </label>
      <label class="tab" htmlFor="tab-front"></label>
      <label class="tab" htmlFor="tab-bottom">
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
          <h1 style={{ margin: "50px" }}>HINT</h1>
          <WordCounter />
          {synonyms ? (
            <p>
              synonyms:{" "}
              {synonyms.map((synonym) => (
                <span>{synonym} - </span>
              ))}
            </p>
          ) : (
            <p>Sorry, no synonyms were found for this word.</p>
          )}
        </div>
        <div class="tab-content">
          <h1 style={{ margin: "50px" }}>REVIEW</h1>
          <p>If you want to see the transcription of the recording,</p>
          <p> click on the microphone.</p>
          <p>If you want to get some hints about your speech, </p>
          <p> go to the lightbulb.</p>
        </div>
        <div class="tab-content">
          <h1 style={{ margin: "50px" }}>TRANSCRIPTION</h1>
          <p>{story}</p>
        </div>
      </div>
    </div>
  );
}
