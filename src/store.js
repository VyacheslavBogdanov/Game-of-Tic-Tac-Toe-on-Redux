import { reducer } from "./reducer";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

// const createStore = (reducer) => {
//   let state = reducer(undefined, {});
//   let listeners = [];

//   return {
//     dispatch: (action) => {
//       state = reducer(state, action);
//       console.log("state", state);
//       listeners.forEach((listener) => listener());
//     },
//     getState: () => state,
//     subscribe: (callback) => {
//       listeners.push(callback);
//       return () => {
//         listeners = listeners.filter((listener) => listener !== callback);
//       };
//     },
//   };
// };

// export const store = createStore(reducer);

// store.dispatch({});
