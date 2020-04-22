import axios from "axios";
import { apiUrl } from "../../config/constants";

import Unsplash, { toJson } from "unsplash-js";
const unsplash = new Unsplash({
  accessKey: "nMLSTSnN7Ks1JEPQRWUT9H2-BUj8ubLv01sFlu8l2RY",
});

export const randomPicture = (picture) => ({
  type: "RANDOM_PICTURE",
  payload: picture,
});
export const pictureDescription = (description) => ({
  type: "DESCRIPTION",
  payload: description,
});
export const pictureLabels = (labels) => ({
  type: "LABELS",
  payload: labels,
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
          dispatch(getLabels(picture));
          dispatch(pictureDescription(json.alt_description));
        });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getLabels = (imageUrl) => {
  return async (dispatch, getState) => {
    try {
      //console.log("PICTURE", imageUrl);
      const response = await axios.post(`${apiUrl}/google-vision`, {
        imageUrl,
      });
      const labels = response.data.map((label) => label.description);
      console.log("labels", labels);
      dispatch(pictureLabels(labels));
    } catch (error) {
      console.log(error);
    }
  };
};
