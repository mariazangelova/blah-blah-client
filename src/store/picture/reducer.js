const initialState = { randomPicture: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case "RANDOM_PICTURE":
      return { randomPicture: action.payload };

    default:
      return state;
  }
};
