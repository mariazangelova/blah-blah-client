const initialState = { randomPicture: null, description: null, labels: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case "RANDOM_PICTURE":
      return { randomPicture: action.payload };
    case "DESCRIPTION":
      return { ...state, description: action.payload };
    case "LABELS":
      return { ...state, labels: action.payload };
    default:
      return state;
  }
};
