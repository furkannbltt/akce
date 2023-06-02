import styles from "./LoadingSpinner.module.css";
import { LOADING_SPINNER, LOADING_SPINNER_WRAPPER } from "./constants";

const LoadingSpinner = () => {
  return (
    <div
      data-testid={LOADING_SPINNER_WRAPPER}
      className={styles[LOADING_SPINNER_WRAPPER]}
    >
      <div className={styles[LOADING_SPINNER]} />
    </div>
  );
};

export default LoadingSpinner;
