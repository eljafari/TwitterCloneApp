import React, { useEffect, useState } from 'react';
import React from 'react';
import SearchBox from '../Home/components/Search';
import Suggestions from '../Home/components/Suggestions';
import WhatsHappeningSection from '../Home/components/WhatsHappeningSection';
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import db from '../firebase';

export default function Widgets() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className='widgets'>
      <div className='widgets_input'>
        <SearchIcon className='widgets-seachIcon' />
        <input className='inputbox' placeholder='Search Twitter' type="text" />
      </div>
      <div className="widgets_widgetContainer">

        <div className='widgetphotos'>
          {posts.map((post) => (
            <img src={post.image} />
          ))}
        </div>
        <div className='widgetNews'>
          <h2>What's happening</h2>
          <TwitterTweetEmbed tweetId={'1521194349245042693'} />
          <TwitterTimelineEmbed EmbedsourceType="profile"
            screenName="CNBCi"
            options={{ height: 400 }}
          />
          <TwitterShareButton
            url={"https://twitter.com/elhamjafari20"}
            options={{ text: "#reactjs Learner's Account who is passionate about coding :)", via: "elhamjafari20" }}
          />
        </div>
      </div>
    </div>
  )
}
