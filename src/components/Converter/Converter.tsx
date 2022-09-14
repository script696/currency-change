import React from "react";
import CustomizedMenus from "../Menu/Menu";
import s from "./Converter.module.scss";

const Converter = ({ latest }: any) => {
  return (
    <section className={s.converter}>
      <div className={s.InputConverter}>
        <input type="text" className={s.InputConverter} />
        <CustomizedMenus latest={latest}/>
      </div>
      <div className={s.InputConverter}>
        <input type="text" className={s.InputConverter} />
        <CustomizedMenus latest={latest}/>
      </div>
    </section>
  );
};

export default Converter;
