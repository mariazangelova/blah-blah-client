const initialState = { speech: "", newStory: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case "STORY":
      return { speech: action.payload, newStory: false };
    case "NEW_STORY":
      return { ...state, newStory: true };
    default:
      return state;
  }
};
