import React, { useEffect, useState } from 'react';
import './Feed.css';
import TweetBox from '../SideBar/TweetBox';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Button } from '@mui/material';
import Post from './Profile/Post';
import db from '../firebase';
import ProfileHeader from './Profile/profileHeader';
import Nav from './Profile/Nav';

export default function Feed() {
  const [posts,setPosts]=useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  const userInfo={
    fullName:'Bill Gates ',
    username:'@billgates',
  }
   
  return (
    <div className='feed'>
        {/* Header */}
        <div className='feed_header'>
          <div className='feed_headertitle' >
            <Button className='feed-backbutton'>
              <ArrowBackOutlinedIcon/>
            </Button>
            <h2>{userInfo.fullName}</h2>
          </div>
          <div className='feed_headertweet' >3,871 Tweets</div>
        </div>
        <ProfileHeader/>
        <Nav/>
        {posts.map((post) => (
          <Post
            key={post.text}
            fullName={post.fullName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
        </div>
  )
}
