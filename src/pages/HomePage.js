import React from "react";
import "../cube-style.scss";
import SignUp from "../components/SignUp";

export default function HomePage() {
  return (
    <div class="perspective">
      <label class="tab" for="tab-top">
        <img
          src={`https://cdn4.iconfinder.com/data/icons/basic-flat-ui-extra-set-200-item/76/ui_ux_minimalist_button_hint_idea_innovation-512.png`}
          class="image"
        />
      </label>
      <label class="tab" for="tab-front">
        WORD/PICTURE
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
          <h1>DEFINITION OR DESCRIPTION</h1>
          <p>I am here to help.</p>
        </div>
        <div class="tab-content">
          <h1 style={{ margin: "30px" }}>HOW TO BLAH BLAH CUBE</h1>
          <p>Click on WORD or PICTURE STORY on the left.</p>
          <p>A random word or picture will then appear.</p>
          <p>Take a moment to think about it.</p>
          <p>If you need help, click on the green hint box.</p>
          <p>When ready, click on the START RECORDING button.</p>
          <p>See your words in the pink recording box.</p>
        </div>
        <div class="tab-content">
          <h1>RECORDING</h1>
          <p>Your words will be transcibed here.</p>
        </div>
      </div>
    </div>
  );
}
