import React, { useEffect } from "react";
import Converter from "./components/Converter/Converter";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { setInputCurrency } from "./store/slices/exchSlice";
import { fetchExchange } from "./store/thunks/fetchExch";
import { fetchCurrentLocation } from "./store/thunks/fetchGeo";
import { GEO_TO_EXCH } from "./utils/constants";
import { getCoords, handleCoordsError } from "./utils/getCoords";

function App() {
  const dispatch = useAppDispatch();
  const { userLocation } = useAppSelector((state) => state.geo);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }: any) => {
        const { latitude, longitude } = coords;
        const position = { latitude, longitude };
        dispatch(fetchCurrentLocation(position));
      },
      handleCoordsError,
      {
        enableHighAccuracy: true,
      }
    );

    dispatch(fetchExchange());
  }, []);

  useEffect(() => {
    
    if(userLocation) dispatch(setInputCurrency(GEO_TO_EXCH[userLocation]));
  }, [userLocation]);

  return (
    <div className="container">
      <Converter />
    </div>
  );
}

export default App;
