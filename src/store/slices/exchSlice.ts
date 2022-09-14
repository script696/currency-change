import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  inputCurrency: "",
  targetCurrency: "EUR",
  currencyArray: [],
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
  },
});

export const { setCurrency,setInputCurrency, setTargetCurrency } = exchSliceReducer.actions;

export default exchSliceReducer.reducer;
