import React from "react";
import styles from "../styles/Header.module.scss";

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
        <div>左</div>
        <div>真ん中</div>
        <div>右</div>
    </header>
  );
}

export default HeaderComponent;
