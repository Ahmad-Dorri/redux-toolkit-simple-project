import { configureStore, createSlice } from '@reduxjs/toolkit';
const initialState = {
  counter: 0,
  showCounter: true,
};
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//       break;
//     case 'increase':
//       return {
//         counter: state.counter + action.payload,
//         showCounter: state.showCounter,
//       };
//       break;
//     case 'decrement':
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//       break;
//     case 'toggle':
//       return {
//         counter: state.counter,
//         showCounter: !state.showCounter,
//       };
//       break;
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);
const store = configureStore({
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;
export default store;
