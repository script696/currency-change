import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  inputCurrency: "USD",
  targetCurrency: "EUR",
  currencyArray: [],
  amount: 0,
};

export const exchSliceReducer = createSlice({
  name: "exch",
  initialState,
  reducers: {
    setInputCurrency(state, action) {
      state.inputCurrency = action.payload;
    },
    setTargetCurrency(state, action) {
      state.targetCurrency = action.payload;
    },
    setCurrency(state, action) {
      state.currencyArray = [...Object.keys(action.payload)];
    },
    switchCurrency(state) {
      [state.targetCurrency, state.inputCurrency] = [
        state.inputCurrency,
        state.targetCurrency,
      ];
    },
  },
});

export const {
  setCurrency,
  setInputCurrency,
  setTargetCurrency,
  switchCurrency,
} = exchSliceReducer.actions;

export default exchSliceReducer.reducer;
