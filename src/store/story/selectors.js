export const selectStory = (state) => state.story.speech;
export const selectStoryArray = (state) =>
  state.story.speech.toLowerCase().split(" ");

export const selectNewStory = (state) => state.story.newStory;
