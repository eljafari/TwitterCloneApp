import React from 'react';
import './profileHeader.css';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import { Button } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

export default function ProfileHeader () {
    const userInfo={
        fullName:'Bill Gates ',
        username:'@billgates',
      }
  return (
    <div className='profileHeader'>
        <div className='profileHeader_photo'>
            <img  src='https://pbs.twimg.com/profile_banners/50393960/1626063534/600x200'/>
        </div>
        <div className='profileHeader_info'>
            <div className='profileHeader_follow'>
                <div className='follow_avatar'>
                    <img src='https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg'/>
                </div>
                <div className='followOption'>
                    <Button className='followOption-more'>
                        <MoreHorizOutlinedIcon/>
                    </Button> 
                
                    <Button className='followOption-notif'>
                        <NotificationAddOutlinedIcon/>
                    </Button> 

                    <Button className='follow-unfollow' >
                       <div>Following</div> 
                    </Button>  
                </div>   
            </div>
            <div className='profileHeader_fullName'>
                <h2>{userInfo.fullName}</h2>
                <VerifiedIcon className='post-badge'/>
            </div>
            <div className='profileHeader_username'>
                {userInfo.username}
            </div>
            <div className='profileHeader_description'>
            Sharing things I'm learning through my foundation work and other interests.
            </div>
            <div className='profileHeader_location'>
                <div style={{color:"grey"}}>
                    <LocationOnOutlinedIcon/> Seattle, WA
                </div>
               
                    <a className='profileHeader_link' target="_blank" href='https://www.gatesnotes.com/How-to-Prevent-the-Next-Pandemic?WT.mc_id=20220208120000_HTPTNP-cover_BG-TW_&WT.tsrc=TW'>
                    
                        <AttachFileOutlinedIcon style={{color:"grey"}}/> 
                        <div >
                        gatesnotes.com</div>
                     </a>   
                    <div className='profileHeader_link'>
                        <CalendarMonthOutlinedIcon style={{color:"grey"}}/> 
                        <div >
                        Joined June 2009</div>
                    </div>  
                </div>
            <div className='profileHeader_followers'>
                <a className='following' target="_blank" href='https://twitter.com/BillGates/following'>
                    339 Following
                </a>
                <a className='followers' target="_blank" href='https://twitter.com/BillGates/followers'>
                58.6M Followers
                </a>
            </div>
        </div>   
    </div>
  )
}
