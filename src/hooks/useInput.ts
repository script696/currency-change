import { useState, FormEvent } from "react";
import useValidation from "./useValidation";

const useInput = (initialVal: any, validations: any) => {
  const [val, setVal] = useState(initialVal);
  const valid = useValidation(val, validations);
  const [isDirty, setIsDirty] = useState(false);

  const onChange = (e: any) => {
    setVal(e.target.value);
  };

  const onBlur = (e: any) => {
    setIsDirty(true);
  };
  return { val, onChange, onBlur, isDirty, valid };
};

export default useInput;
