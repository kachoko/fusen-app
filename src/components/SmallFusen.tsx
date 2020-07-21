import React from "react";
import styles from "../styles/SmallFusen.module.scss";

type SmallFusenComponentProps = {
    text: string,
    index: number,
    onDelete: Function
}

const SmallFusenComponent = (props: SmallFusenComponentProps) => {
  return (
    <div className={styles.small}>
        <span>{props.text}</span>
        <div className={styles.cut}></div>
        <div className={styles.pop} onClick={() => {props.onDelete(props.index)}}></div>
    </div>
  );
}

export default SmallFusenComponent;
