export const storeStory = (story) => ({
  type: "STORY",
  payload: story,
});

export const newStory = () => ({
  type: "NEW_STORY",
});
