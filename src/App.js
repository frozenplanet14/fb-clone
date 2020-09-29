import React from 'react';
import * as classes from './App.module.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className={classes.App}>
      {/* <h1>Lets build the facebook clone</h1> */}

      {/* Header */}
      <Header />

      {/* App body */}
      <div className={classes.App__Body}>
        {/* sidebar */}
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
