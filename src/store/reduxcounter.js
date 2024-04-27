import { createStore } from "redux";

const reducerFun = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  } 
  else if (action.type === "INCREMENTBY5") {
    return {
      counter: state.counter + 5,
    };
  } else {
    return state;
  }
};

const store = createStore(reducerFun);

export default store;
