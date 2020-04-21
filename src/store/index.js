import { createStore, applyMiddleware, compose } from "redux";

import ReduxThunk from "redux-thunk";
import reducer from "./rootReducer";
import { messageMiddleware } from "./chat/chat";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk, messageMiddleware)
);

export const store = createStore(reducer, enhancer);
