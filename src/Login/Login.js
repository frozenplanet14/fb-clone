import { Button } from '@material-ui/core';
import React from 'react';
import * as classes from './Login.module.css';
import { auth, provider } from '../firebase';
import { useStateValue } from '../State/StateProvider';
import { actionTypes } from '../State/reducer';

function Login() {
  const [, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch({
          type: actionTypes.SET_USER,
          user,
        });
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className={classes.Login}>
      <div className={classes.Login__Logo}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button className={classes.Login__Button} type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
