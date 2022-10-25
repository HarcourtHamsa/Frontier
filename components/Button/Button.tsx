import React, { ReactElement } from "react";
import { ButtonInterface } from "../../types";
import styles from "./Button.module.scss";

const Button = ({ label, theme }: ButtonInterface): ReactElement => {
  
  return (
    <button data-theme={theme} className={styles.button}>
      {label}
    </button>
  );
};

export default Button;
