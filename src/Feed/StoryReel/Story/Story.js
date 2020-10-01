import { Avatar } from '@material-ui/core';
import React from 'react';
import * as classes from './Story.module.css';

function Story({ image, profileSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={classes.Story}>
      <Avatar className={classes.Story__Avatar} src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
