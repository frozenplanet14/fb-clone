import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FlagIcon from '@material-ui/icons/Flag';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import * as classes from './Header.module.css';
import { Avatar, IconButton } from '@material-ui/core';

function Header() {
  return (
    <div className={classes.Header}>
      <div className={classes.Header__Left}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1920px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className={classes.Header__Input}>
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className={classes.Header__Center}>
        <div className={classes.Header__Option}>
          <HomeIcon className={classes.Header__Option_Icon} fontSize="large" />
        </div>
        <div className={classes.Header__Option}>
          <FlagIcon className={classes.Header__Option_Icon} fontSize="large" />
        </div>
        <div className={classes.Header__Option}>
          <SubscriptionsOutlinedIcon
            className={classes.Header__Option_Icon}
            fontSize="large"
          />
        </div>
        <div className={classes.Header__Option}>
          <StorefrontOutlinedIcon
            className={classes.Header__Option_Icon}
            fontSize="large"
          />
        </div>
        <div className={classes.Header__Option}>
          <SupervisedUserCircleIcon
            className={classes.Header__Option_Icon}
            fontSize="large"
          />
        </div>
      </div>

      <div className={classes.Header__Right}>
        <div className={classes.Header__Info}>
          <Avatar />
          <h4>SUJHA</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
