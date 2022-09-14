import React from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  setInputCurrency,
  setTargetCurrency,
} from "../../store/slices/exchSlice";
import CustomizedMenus from "../Menu/Menu";
import s from "./Converter.module.scss";

const Converter = () => {
  const { currencyArray, inputCurrency, targetCurrency } = useAppSelector(
    (state) => state.exch
  );
  const dispatch = useAppDispatch();

  return (
    <section className={s.converter}>
      <div className={s.converter__topRow}>
        <div className={s.converter__column}>
          <p className={s.converter__text}>Amount</p>
          <input type="text" className={s.InputConverter} />
        </div>
        <div className={s.converter__column}>
          <p className={s.converter__text}>From</p>
          <CustomizedMenus
            onSelect={(e: any) =>
              dispatch(setInputCurrency(e.currentTarget.textContent))
            }
            currencyArray={currencyArray}
            currency={inputCurrency}
          />
        </div>
        <button className={s.converter__switch}></button>
        <div className={s.converter__column}>
          <p className={s.converter__text}>To</p>
          <CustomizedMenus
            onSelect={(e: any) =>
              dispatch(setTargetCurrency(e.currentTarget.textContent))
            }
            currencyArray={currencyArray}
            currency={targetCurrency}
          />
        </div>
      </div>
      <div className={s.converter__bottomRow}>
        <div className={s.converter__column}>
          <p className={s.converter__text}>Result</p>
          <p className={s.converter__text}>1.00 US Dollar = 0.99966254 Euros</p>
        </div>
      </div>
      {/* <div className={s.InputConverter}>
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
      </div> */}
    </section>
  );
};

export default Converter;
