import { ON_MESSAGE } from "./chat";
const initState = [{ text: "Hey, I am Jimmy. How are you doing?" }];
export default (state = initState, action) => {
  switch (action.type) {
    case ON_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};
