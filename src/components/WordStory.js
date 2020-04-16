import React from "react";
import "../cube-style.scss";

export default function WordStory() {
  return (
    <div class="perspective">
      <label class="tab" for="tab-top">
        TOP
      </label>
      <label class="tab" for="tab-front">
        FRONT
      </label>
      <label class="tab" for="tab-bottom">
        BOTTOM
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
          <h1>FRONT CONTENT</h1>
          <p>THIS IS COOL</p>
        </div>
        <div class="tab-content">
          <h1>BOTTOM CONTENT</h1>
          <p>THIS IS SWEET</p>
        </div>
      </div>
    </div>
  );
}
