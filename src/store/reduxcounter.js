// import { createStore } from "redux";
import {createSlice,configureStore} from "@reduxjs/toolkit"
const initialCounterState = { counter: 0, showCounter: true };

const initialAuthState = {
    isAuthenticated: false
}
const AuthSlice = createSlice({
    name: 'authentication',
    initialState : initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        INCREMENT(state) {
            state.counter = state.counter + 2
        },
        DECREMENT(state) {
            state.counter = state.counter - 2;
        },
        INCREMENTBY5(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    },
})
// const reducerFun = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//         ...state,
//         counter: state.counter + action.value,
     
//     };
//   } else if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - action.value,
//       showCounter: state.showCounter,
//     };
//   } else if (action.type === "INCREMENTBY5") {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   } else if (action.type === "toggle") {
//     return {
//       counter: state.counter ,
//       showCounter: !state.showCounter,
//     };
//   } else {
//     return state;
//   }
// };



const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        authentication: AuthSlice.reducer
    }
    
});

export const authActions = AuthSlice.actions
export const counterActions = counterSlice.actions
export default store;
