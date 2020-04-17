export const selectRandomWord = (state) => state.randomWord;
export const selectDefinition = (state) =>
  state.hints ? state.hints.definition : null;
