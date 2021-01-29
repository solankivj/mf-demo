import { createStore } from "redux";
function countReducer(state = { count: 0 }, action) { switch (action.type) {
case "INCREMENT":
return {
...state,
count: state.count + 1,
};
case "RESET":
return { ...state, count: 0,
}; default:
    return state;
  }
}
export const store = createStore(countReducer);