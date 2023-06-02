import styles from "./Button.module.css";
import { BUTTON_WRAPPER } from "./constants";
import type { IButton } from "./types";
import classNames from "classnames";

const Button = (props: IButton) => {
  const { text, style, className, onClick } = props;
  return (
    <button
      data-testid={BUTTON_WRAPPER}
      style={{ ...style }}
      onClick={onClick}
      className={classNames(styles[BUTTON_WRAPPER], className)}
    >
      {text}
    </button>
  );
};

export default Button;
