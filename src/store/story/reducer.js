const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "STORY":
      return action.payload;
    default:
      return state;
  }
};
