import { ImSpinner2 } from "react-icons/im";

import styles from "./Spinner.module.scss";

function Spinner() {
  return (
    <div className={styles.spinner}>
      <div className={styles.content}>
        <ImSpinner2 />
      </div>
    </div>
  );
}

export default Spinner;
