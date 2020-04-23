import React from "react";
import "../cube-style.scss";

export default function HomePage() {
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
      <input name="tabs" id="tab-top" />
      <input type="radio" name="tabs" id="tab-front" />
      <input name="tabs" id="tab-bottom" />

      <div class="cube">
        <div class="tab-content">
          <h1>DEFINITION OR DESCRIPTION</h1>
          <p>I am here to help.</p>
        </div>
        <div class="tab-content">
          <h2 style={{ margin: "30px" }}>WELCOME TO BLAH BLAH CUBE</h2>
          <h1 style={{ margin: "50px" }}>Here you can:</h1>
          <p>Pracitce English speaking</p>
          <p>Practice creative story telling</p>
          <p>Have fun!</p>
        </div>
        <div class="tab-content">
          <h1>RECORDING</h1>
          <p>Your words will be transcibed here.</p>
        </div>
      </div>
    </div>
  );
}
