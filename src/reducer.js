const initialState = {
  currentPlayer: "X",
  isGameEnded: false,
  isDraw: false,
  field: ["", "", "", "", "", "", "", "", ""],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_PLAYER": {
      return payload;
    }
    case "SET_GAME_ENDED": {
      return {
        ...state,
        age: payload,
      };
    }
    case "SET_IS_DRAW": {
      return payload;
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

// const initialState = {
//   currentPlayer: "X",
//   isGameEnded: false,
//   isDraw: false,
//   field: ["", "", "", "", "", "", "", "", ""],
// };

// export const reducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case "SET_CURRENT_PLAYER":
//       return {
//         ...state,
//         currentPlayer: payload,
//       };

//     case "SET_GAME_ENDED":
//       return {
//         ...state,
//         isGameEnded: payload,
//       };

//     case "SET_IS_DRAW":
//       return {
//         ...state,
//         isDraw: payload,
//       };

//     case "SET_FIELD":
//       return {
//         ...state,
//         field: payload,
//       };

//     default:
//       return state;
//   }
// };
