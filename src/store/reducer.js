const initialState = { randomWord: null, hints: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case "RANDOM_WORD":
      return { randomWord: action.payload };
    case "HINTS":
      return { ...state, hints: action.payload };
    default:
      return state;
  }
};
