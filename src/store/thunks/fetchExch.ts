import { ExchangeService } from "../../services/ExchangeService";
import { exchSliceReducer } from "../slices/exchSlice";
import { AppDispatch } from "../store";

export const fetchExchange = () => async (dispatch: AppDispatch) => {
  try {
    const res = await ExchangeService.getLatest();
    const data = await res.json();

    if (res.status === 200) {
      
      dispatch(exchSliceReducer.actions.setCurrency(data.rates))
    } else {
      console.log("false");
    }
  } catch (error) {
    console.log(error);
  }
};
