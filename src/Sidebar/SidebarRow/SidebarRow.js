import { Avatar } from '@material-ui/core';
import React from 'react';
import * as classes from './SidebarRow.module.css';

function SidebarRow({ title, src, Icon }) {
  return (
    <div className={classes.SidebarRow}>
      {src && <Avatar src={src} />}
      {Icon && <Icon className={classes.SidebarRow__Icon} />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
