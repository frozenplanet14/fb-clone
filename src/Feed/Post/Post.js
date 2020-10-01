import { Avatar } from '@material-ui/core';
import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import * as classes from './Post.module.css';

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className={classes.Post}>
      <div className={classes.Post__Top}>
        <Avatar src={profilePic} className={classes.Post_Avatar} />
        <div className={classes.Post__Top_Info}>
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className={classes.Post__Bottom}>
        <p>{message}</p>
      </div>

      <div className={classes.Post__Image}>
        <img src={image} alt="" />
      </div>

      <div className={classes.Post__Options}>
        <div className={classes.Post__Option}>
          <ThumbUpIcon />
        </div>

        <div className={classes.Post__Option}>
          <ChatBubbleOutlineIcon />
        </div>

        <div className={classes.Post__Option}>
          <NearMeIcon />
        </div>

        <div className={classes.Post__Option}>
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
