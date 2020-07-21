import React from "react";
import styles from "../styles/Header.module.scss";

type HeaderComponentProps = {
  onClear: Function
}

const HeaderComponent = (props: HeaderComponentProps) => {
  return (
    <header className={styles.header}>
        <div>左</div>
        <div>真ん中</div>
        <div>
          <button onClick={() => { props.onClear(); }}>クリア</button>
        </div>
    </header>
  );
}

export default HeaderComponent;
