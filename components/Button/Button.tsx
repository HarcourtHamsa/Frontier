import React, { ReactElement } from "react";
import { ButtonInterface } from "../../types";
import styles from "./Button.module.scss";

const Button = ({ label, theme, type }: ButtonInterface): ReactElement => {
  
  return (
    <button data-theme={theme} className={styles.button} type={type}>
      {label}
    </button>
  );
};

export default Button;
