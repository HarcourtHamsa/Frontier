import React, { ReactElement } from "react";
import { ButtonInterface } from "../../types";
import styles from "./Button.module.scss";

const Button = ({
  label,
  theme,
  type,
  onClick,
}: ButtonInterface): ReactElement => {
  return (
    <button
      data-theme={theme}
      className={styles.button}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
