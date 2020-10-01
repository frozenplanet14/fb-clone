import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import * as classes from './MessageSender.module.css';
import { useStateValue } from '../../State/StateProvider';
import firebase from 'firebase/app';
import 'firebase/firestore'; // for cloud firestore
import db from '../../firebase';

function MessageSender() {
  const [{ user }] = useStateValue();
  const [inputValue, setInputValue] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    db.collection('posts').add({
      message: inputValue,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });
    // console.log('form submitted');
    setInputValue('');
    setImageUrl('');
  };
  return (
    <div className={classes.MessageSender}>
      <div className={classes.MessageSender__Top}>
        <Avatar src={user.photoURL} />
        <form onSubmit={handleSubmit}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={classes.MessageSender__Input}
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />
          <button type="submit">Hidden Submit</button>
        </form>
      </div>

      <div className={classes.MessageSender__Bottom}>
        <div className={classes.MessageSender__Option}>
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>

        <div className={classes.MessageSender__Option}>
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>

        <div className={classes.MessageSender__Option}>
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
