import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SidebarOption from './SidebarOption';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className='sidebar'>
       
        <TwitterIcon className='tweetIcon' />
       
        <Link to="/" ><SidebarOption active icon={<HomeOutlinedIcon/>} text="Home"/></Link>
        
        <Link to="/explore" ><SidebarOption icon={<TagIcon/>} text="Explore"/></Link>
        <Link to="/notifications" ><SidebarOption icon={<NotificationsNoneIcon/>} text="Notifications"/></Link>
        <Link to="/message" ><SidebarOption icon={<MailOutlineIcon/>} text="Message"/></Link>
        <Link to="/bookmarks" ><SidebarOption icon={<BookmarkBorderIcon/>} text="Bookmarks"/></Link>
        <Link to="/lists" ><SidebarOption icon={<ListAltIcon/>} text="Lists"/></Link>
        <Link to="/profile" ><SidebarOption icon={<PermIdentityIcon/>} text="Profile"/></Link>
        <Link to="/more" ><SidebarOption icon={<MoreHorizIcon/>} text="More"/> </Link>
        <Button className='sidebar-tweet' variant='outlined' fullWidth>
          Tweet</Button>
    </div>
  )
}
