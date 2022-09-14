import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  userLocation: "",
};

export const geoSliceReducer = createSlice({
  name: "geolocation",
  initialState,
  reducers: {
    setCurrentLocation(state, action) {
      state.userLocation = action.payload;
    },
  },
});

export const { setCurrentLocation } = geoSliceReducer.actions;

export default geoSliceReducer.reducer;
