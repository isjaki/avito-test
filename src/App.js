import React, { Component } from 'react';

import AdvertsList from './components/AdvertsList/AdvertsList';
import FiltersWidget from './components/FiltersWidget/FiltersWidget';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <AdvertsList />
        <FiltersWidget />
      </div>
    );
  }
}

export default App;