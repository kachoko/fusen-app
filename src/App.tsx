import React from 'react';
import HeaderComponent from './components/Header';
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <HeaderComponent />
      <span>あいうえお</span>
    </div>
  );
}

export default App;
