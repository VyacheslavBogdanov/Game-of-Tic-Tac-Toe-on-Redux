import { initialState } from "./initial-state";

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_PLAYER": {
      return {
        ...state,
        currentPlayer: payload,
      };
    }
    case "SET_GAME_ENDED": {
      return {
        ...state,
        isGameEnded: payload,
      };
    }
    case "SET_IS_DRAW": {
      return {
        ...state,
        isDraw: payload,
      };
    }
    case "SET_FIELD": {
      return {
        ...state,
        field: payload,
      };
    }
    case "SET_CURRENT_PLAYER": {
      return;
    }
    default:
      return state;
  }
};
