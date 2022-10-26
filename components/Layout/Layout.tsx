import React, { useState } from "react";
import styles from "./Layout.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.inner}>
          <p></p>

          <div className={styles.user__info__container}>
            <div className={styles.user__info}>
              <p>@Ohabiks</p>
              <div
                className={styles.avi}
                onClick={() => setIsOpen(!isOpen)}
              ></div>
            </div>

            <div className={styles.dropdown} data-active={isOpen}>
              <ul>
                <li>My Store</li>
                <li>Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
