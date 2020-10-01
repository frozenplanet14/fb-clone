import React from 'react';
import * as classes from './App.module.css';
import Feed from './Feed/Feed';
import Header from './Header/Header';
import Login from './Login/Login';
import Sidebar from './Sidebar/Sidebar';
import { useStateValue } from './State/StateProvider';
import Widgets from './Widgets/Widgets';

function App() {
  const [{ user }] = useStateValue();
  return (
    <div className={classes.App}>
      {/* <h1>Lets build the facebook clone</h1> */}
      {user ? (
        <>
          {/* Header */}
          <Header />

          {/* App body */}
          <div className={classes.App__Body}>
            {/* sidebar */}
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
            <Widgets />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
