import { Button, Avatar } from '@mui/material';
import React from 'react'
import './TweetBox.css';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function TweetBox() {
  return (
    <div className='tweetbox'>
        <form >
            <div className='tweetbox_input'>
            <Avatar src='https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg' />
            <input placeholder='Whats Happening?' />
            </div>
            <div>
            <Button className='tweetbox-sharebutton'>
                <InsertPhotoOutlinedIcon/>
            </Button>
            <Button className='tweetbox-sharebutton'>
                <GifBoxOutlinedIcon/>
            </Button>
            <Button className='tweetbox-sharebutton'>
                <BarChartOutlinedIcon/>
            </Button>
            <Button className='tweetbox-sharebutton'>
                <SentimentSatisfiedOutlinedIcon/>
            </Button>
            <Button className='tweetbox-sharebutton'>
                <EventNoteOutlinedIcon/>
            </Button>
            <Button className='tweetbox-sharebutton'>
                <LocationOnOutlinedIcon/>
            </Button>
            <Button className='tweetbox-button'>
                Tweet
            </Button>
            </div>
        </form>
    </div>
  )
}
