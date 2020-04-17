import Unsplash, { toJson } from "unsplash-js";
const unsplash = new Unsplash({
  accessKey: "nMLSTSnN7Ks1JEPQRWUT9H2-BUj8ubLv01sFlu8l2RY",
});

export const randomPicture = (picture) => ({
  type: "RANDOM_PICTURE",
  payload: picture,
});

export const fetchPicture = () => {
  return async (dispatch, getState) => {
    try {
      unsplash.photos
        .getRandomPhoto()
        .then(toJson)
        .then((json) => {
          const picture = json.urls.small;
          dispatch(randomPicture(picture));
        });
    } catch (error) {
      console.log(error);
    }
  };
};
