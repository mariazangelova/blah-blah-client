export const selectPicture = (state) => state.picture.randomPicture;
export const selectPictureDescription = (state) => state.picture.description;
export const selectPictureLabels = (state) => state.picture.labels;
export const selectLabels = (state) => {
  const array = state.picture.labels;
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toLowerCase();
  }
  console.log("array", array);
  return array;
};
