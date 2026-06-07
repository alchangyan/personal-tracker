import { FaTableColumns } from "react-icons/fa6";

import styles from "./Header.module.scss";
import Button from "@/components/Button";

function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <Button icon={<FaTableColumns />} theme="blue" inline></Button>
      </nav>
    </div>
  );
}

export default Header;
