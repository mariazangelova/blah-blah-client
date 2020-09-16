import React from "react";
import "../cube-style.scss";

export default function HowTo() {
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
          <h1>HINTS</h1>
          <p>I am here to help.</p>
        </div>
        <div className="tab-content">
          <h1 style={{ margin: "30px" }}>WELCOME TO BLAH BLAH CUBE</h1>
          <p>Here you can play with Google Vision AI.</p>
          <p>Upload a photo and try to guess</p>
          <p>what labels would Google give it.</p>
          <p>The top green box can give you hints.</p>
          <p>On the pink box your words will be transcribed.</p>
          <p>To start click on PLAY on the left.</p>
        </div>
        <div className="tab-content">
          <h1>RECORDING</h1>
          <p>Your words will be transcibed here.</p>
        </div>
      </div>
    </div>
  );
}
