export const selectRandomWord = (state) => state.word.randomWord;
export const selectDefinition = (state) =>
  state.word.hints ? state.word.hints.definition : null;

export const selectSynonyms = (state) => state.word.synonyms;
