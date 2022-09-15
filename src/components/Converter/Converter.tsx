import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import useInput from "../../hooks/useInput";
import {
  setInputCurrency,
  setTargetCurrency,
  switchCurrency,
} from "../../store/slices/exchSlice";
import { fetchConvert } from "../../store/thunks/fetchExch";
import CustomizedMenus from "../Menu/Menu";
import s from "./Converter.module.scss";

const Converter = () => {
  const { currencyArray, inputCurrency, targetCurrency, inputVal, targetVal} = useAppSelector(
    (state) => state.exch
  );
  const dispatch = useAppDispatch();
  const currency = useInput("", { isEmpty: true, isCurrency: true });

  useEffect(() => {
    if(currency.val) {
      dispatch(fetchConvert(targetCurrency, inputCurrency, currency.val))
    };
  }, [currency.val, targetCurrency, inputCurrency]);

  return (
    <section className={s.converter}>
      <div className={s.converter__topRow}>
        <div className={s.converter__column}>
          <p className={s.converter__text}>Amount</p>
          <input
            value={currency.val}
            onChange={(e) => currency.onChange(e)}
            onBlur={(e) => currency.onBlur(e)}
            type="text"
            className={s.InputConverter}
          />
          {!currency.valid.isInputValid && currency.isDirty && (
            <p className={s.InputConverter__err}>Please enter a valid amount</p>
          )}
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
        <button
          onClick={() => dispatch(switchCurrency())}
          className={s.converter__switch}
        ></button>
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
          <p
            className={s.converter__text}
          >{`${currency.val} ${inputCurrency} = ${inputVal} ${targetCurrency}`}</p>
        </div>
      </div>
    </section>
  );
};

export default Converter;
