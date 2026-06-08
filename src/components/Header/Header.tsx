import type { MouseEvent } from "react";
import { FaTableColumns } from "react-icons/fa6";

import styles from "./Header.module.scss";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function handleNavigate(e: MouseEvent<HTMLDivElement>) {
    const { id: route } = e.currentTarget.dataset;
    
    if (route) {
      navigate(route);
    }
  }

  return (
    <div className={styles.header}>
      <nav>
        <Button
          icon={<FaTableColumns />}
          dataId="/"
          theme="blue"
          inline
          onClick={handleNavigate}
        />
      </nav>
    </div>
  );
}

export default Header;
