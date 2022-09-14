import React from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { setInputCurrency, setTargetCurrency } from "../../store/slices/exchSlice";
import CustomizedMenus from "../Menu/Menu";
import s from "./Converter.module.scss";

const Converter = () => {
  const { currencyArray, inputCurrency, targetCurrency } = useAppSelector(
    (state) => state.exch
  );
  const dispatch = useAppDispatch();

  return (
    <section className={s.converter}>
      <div className={s.InputConverter}>
        <input type="text" className={s.InputConverter} />
        <CustomizedMenus
          onSelect={(e: any) =>
            dispatch(setInputCurrency(e.currentTarget.textContent))
          }
          currencyArray={currencyArray}
          currency={inputCurrency}
        />
      </div>
      <div className={s.InputConverter}>
        <input type="text" className={s.InputConverter} />
        <CustomizedMenus
          onSelect={(e: any) =>
            dispatch(setTargetCurrency(e.currentTarget.textContent))
          }
          currencyArray={currencyArray}
          currency={targetCurrency}
        />
      </div>
    </section>
  );
};

export default Converter;
