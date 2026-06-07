import type { ReactNode } from "react";
import Header from "@/components/Header";

import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Layout;
