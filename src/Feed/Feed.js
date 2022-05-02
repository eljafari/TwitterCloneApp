import React from 'react'
import './Feed.css';
// import TweetBox from '../SideBar/TweetBox';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Button } from '@mui/material';
import Post from './Profile/Post';
export default function Header() {

  const userInfo={
    fullName:'Bill Gates ',
    username:'@billgates',
  }
  const posts= [
    {
      date:'2h',
      // verified:true,
      text:'To avoid another COVID-19 – or worse – the world needs a full-time, paid team whose entire job is to prevent pandemics. I call it GERM:',
      image:'https://pbs.twimg.com/card_img/1519680864984076288/MSFc4-9p?format=jpg&name=small',
    },
    {
      date:'12h',
      verified:false,
      text:"I’m looking forward to this chat with at @howtoacademy and @penguinlive.",
    
    },
    {
      date:'Apr 28',
      verified:true,
      text:"The best way to prevent pneumonia is to vaccinate children against the pathogens that cause it. This is an impressive effort. #LongLifeForAll @MoHFW_INDIA",
      image:'https://pbs.twimg.com/card_img/1518685002317316100/FgtpmX07?format=jpg&name=small',

    },
    {
      date:'Apr 27',
      verified:true,
      text:'Giving a TED talk is always a memorable (and nerve-wracking!) experience. Beyond the talk, I also got to listen to the stories of frontline workers and catch up with some of the people working to make the world a more equitable place:',
      image:'https://pbs.twimg.com/card_img/1517565749891530753/p7cpWgw8?format=jpg&name=small',

    }
  ]
   
  return (
    <div className='feed'>
        {/* Header */}
        <div className='feed_header'>
          <Button className='feed-backbutton'>
            <ArrowBackOutlinedIcon/>
          </Button>
          <h2>Profile</h2>
        </div>
        {/* TweetBox */}
        {/* Post */}
        <Post fullName={userInfo.fullName} username={userInfo.username} date={posts[0].date}  text={posts[0].text} image={posts[0].image} />
        <Post fullName={userInfo.fullName} username={userInfo.username} date={posts[1].date} verified={posts[1].verified} text={posts[1].text} image={posts[1].image} />
        <Post fullName={userInfo.fullName} username={userInfo.username} date={posts[2].date} verified={posts[2].verified} text={posts[2].text} image={posts[2].image} />
        <Post fullName={userInfo.fullName} username={userInfo.username} date={posts[3].date} verified={posts[3].verified} text={posts[3].text} image={posts[3].image} />
        <Post fullName={userInfo.fullName} username={userInfo.username} date={posts[0].date}  text={posts[0].text} image={posts[0].image} />
        <Post fullName={userInfo.fullName} username={userInfo.username} date={posts[1].date} verified={posts[1].verified} text={posts[1].text} image={posts[1].image} />
        <Post fullName={userInfo.fullName} username={userInfo.username} date={posts[2].date} verified={posts[2].verified} text={posts[2].text} image={posts[2].image} />
        <Post fullName={userInfo.fullName} username={userInfo.username} date={posts[3].date} verified={posts[3].verified} text={posts[3].text} image={posts[3].image} />
        <Post fullName={userInfo.fullName} username={userInfo.username} date={posts[3].date} verified={posts[3].verified} text={posts[3].text} image={posts[3].image} />
        {/* Post */}
        {/* Post */}
        {/* Post */}
        </div>
  )
}
