import React from "react";
import { useSelector } from "react-redux";
import { selectStoryArray } from "../store/story/selectors";

export default function WordCounter() {
  const story = useSelector(selectStoryArray);
  let mf = 1;
  let m = 0;
  let item;
  for (let i = 0; i < story.length; i++) {
    if (
      story[i] === "the" ||
      story[i] === "and" ||
      story[i] === "a" ||
      story[i] === "which" ||
      story[i] === "that" ||
      story[i] === "this" ||
      story[i] === "but"
    ) {
      continue;
    }
    for (let j = i; j < story.length; j++) {
      if (story[i] === story[j]) m++;
      if (mf < m) {
        mf = m;
        item = story[i];
      }
    }

    m = 0;
  }
  console.log(`${item} ( ${mf} times ) `);
  return (
    <div>
      <p>
        {item} was repeated {mf} times
      </p>
    </div>
  );
}
