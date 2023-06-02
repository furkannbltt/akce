import classNames from "classnames";
import styles from "./Rating.module.css";
import { GREEN, RATING, RED, YELLOW } from "./contants";
import type { IRating } from "./types";

const Rating = (props: IRating) => {
  const { value } = props;

  const findColor = (value: number) => {
    if (value >= 0 && value <= 3.3) {
      return styles[RED];
    } else if (value > 3.3 && value <= 6.6) {
      return styles[YELLOW];
    } else if (value > 6.6) {
      return styles[GREEN];
    }
  };

  return (
    <div
      data-testid={RATING}
      className={classNames(styles[RATING], findColor(value))}
    >
      {value}
    </div>
  );
};

export default Rating;
