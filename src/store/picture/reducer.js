const initialState = { randomPicture: null, description: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case "RANDOM_PICTURE":
      return { randomPicture: action.payload };
    case "DESCRIPTION":
      return { ...state, description: action.payload };
    default:
      return state;
  }
};
