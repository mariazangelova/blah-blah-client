import { combineReducers } from "redux";
import word from "./word/reducer";
import picture from "./picture/reducer";

export default combineReducers({
  word,
  picture,
});
