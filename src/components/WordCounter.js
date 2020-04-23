import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectStoryArray } from "../store/story/selectors";
import { fetchSynomyms } from "../store/word/actions";

export default function WordCounter() {
  const dispatch = useDispatch();
  const story = useSelector(selectStoryArray);
  let mf = 1;
  let m = 0;
  let word;
  for (let i = 0; i < story.length; i++) {
    if (
      story[i] === "the" ||
      story[i] === "and" ||
      story[i] === "a" ||
      story[i] === "which" ||
      story[i] === "that" ||
      story[i] === "this" ||
      story[i] === "but" ||
      story[i] === "is" ||
      story[i] === "are" ||
      story[i] === "you" ||
      story[i] === "she"
    ) {
      continue;
    }
    for (let j = i; j < story.length; j++) {
      if (story[i] === story[j]) m++;
      if (mf < m) {
        mf = m;
        word = story[i];
      }
    }

    m = 0;
  }
  console.log(`${word} ( ${mf} times ) `);
  useEffect(() => {
    dispatch(fetchSynomyms(word));
  }, [dispatch, word]);
  return (
    <div>
      {word === undefined ? (
        <p>You did not repeat any words, well done!</p>
      ) : (
        <p>
          <b>{word}</b> was repeated {mf} times
        </p>
      )}
    </div>
  );
}
