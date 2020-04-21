import { combineReducers } from "redux";
import word from "./word/reducer";
import picture from "./picture/reducer";
import chat from "./chat/reducer";

export default combineReducers({
  word,
  picture,
  chat,
});
