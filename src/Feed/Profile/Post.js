import { Avatar, Button } from '@mui/material';
import React from 'react';
import './Post.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export default function Post({fullName, username, verified, date,text,image,avatar})
 {
  return (
    <div className='post'>
        <div className='post_avatar'>
            <Avatar className='post-avatarimg' src='https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg' />
        </div>
        <div className='post-body'>
            <div className='post-header' >
                <div className='post-headerText' >
                    <h3>
                        {fullName} <span>
                            {{verified}? <VerifiedIcon className='post-badge'/>: null }
                            
                        </span>
                    </h3>
                    <span className='post-username'>
                             {username}
                    </span>
                    <span className='post-username post-date'>
                        {date}
                    </span>
                    <Button className='post-more'>
                        <MoreHorizOutlinedIcon/>
                    </Button>
                </div>
                
                <div className='post-headerDescription'>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
            {{image}? <img src={image}/>: null }
            <div className='post-footer'>
                <ChatBubbleOutlineOutlinedIcon fontSize='small'/>
                <RepeatOutlinedIcon fontSize='small'/>
                <FavoriteBorderOutlinedIcon fontSize='small'/>
                <IosShareOutlinedIcon fontSize='small'/>
            </div>
        </div>
    </div>
  )
}
