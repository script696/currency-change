import { configureStore } from "@reduxjs/toolkit";
import geoSliceReducer from "./slices/geoSlice";


const store = configureStore({
  reducer: {
    geo: geoSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
