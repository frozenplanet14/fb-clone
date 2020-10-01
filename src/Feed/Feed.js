import React, { useEffect, useState } from 'react';
import * as classes from './Feed.module.css';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';
import StoryReel from './StoryReel/StoryReel';
import db from '../firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div className={classes.Feed}>
      {/* story reel */}
      <StoryReel />
      {/* Message Sender */}
      <MessageSender />
      {/* Posts */}
      {posts.map((p) => (
        <Post
          key={p.id}
          profilePic={p.data.profilePic}
          message={p.data.message}
          timestamp={p.data.timestamp}
          username={p.data.username}
          image={p.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
