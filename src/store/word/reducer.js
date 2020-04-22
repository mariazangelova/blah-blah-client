const initialState = { randomWord: null, hints: {}, synonyms: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case "RANDOM_WORD":
      return { randomWord: action.payload };
    case "HINTS":
      return { ...state, hints: action.payload };
    case "SYNONYMS":
      return { ...state, synonyms: action.payload };
    default:
      return state;
  }
};
