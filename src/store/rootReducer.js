import { combineReducers } from "redux";
import word from "./word/reducer";
import picture from "./picture/reducer";
import messageReducer from "./chat/chat";

export default combineReducers({
  word,
  picture,
  messageReducer,
});
