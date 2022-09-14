import React, { useEffect, useState } from "react";
import Converter from "./components/Converter/Converter";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { fetchCurrentLocation } from "./store/thunks/fetchGeo";
import { getCoords, handleCoordsError } from "./utils/getCoords";

function App() {
  const dispatch = useAppDispatch();

  const [latest, setLatest] = useState({});

  useEffect(() => {
    const getLatest = async () => {
      const latest = await fetch(
        "https://api.apilayer.com/exchangerates_data/latest",
        {
          headers: {
            apikey: "R2x93LlvSsmaGYIaCzm6RdTM4F6kbS9q",
          },
        }
      );
      const data = await latest.json();
      setLatest((prev) => ({ ...prev, ...data.rates }));
    };
    getLatest();

    navigator.geolocation.getCurrentPosition(
      ({ coords }: any) => {
        const { latitude, longitude } = coords;
        const position = {latitude, longitude};
        dispatch(fetchCurrentLocation(position))
      },
      handleCoordsError,
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  useEffect(() => {
    console.log(latest);
  }, [latest]);

  return (
    <div className="container">
      <Converter latest={latest} />
    </div>
  );
}

export default App;
