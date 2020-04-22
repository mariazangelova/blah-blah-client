import React from "react";

export default function WordCounter() {
  const story = [];
  let mf = 1;
  let m = 0;
  let item;
  for (let i = 0; i < story.length; i++) {
    if (
      arr1[i] === "the" ||
      arr1[i] === "and" ||
      arr1[i] === "a" ||
      arr1[i] === "which" ||
      arr1[i] === "that" ||
      arr1[i] === "this" ||
      arr1[i] === "but"
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
  return <div></div>;
}
