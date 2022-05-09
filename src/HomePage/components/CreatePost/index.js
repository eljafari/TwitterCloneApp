import { ImageOutlined, GifBoxOutlined, PollOutlined, EmojiEmotionsOutlined, InsertInvitationOutlined, FmdGoodOutlined } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import './index.css';

const CreatePost = () => {

    return (
        <div className='create-post-container'>
                <div className='user-profile-image'>
                    <img src='https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg'  />
                </div>
                <div className='new-post-content'>
                    <div>
                        <input type='text' placeholder={'What\'s Happenning?'} />
                    </div>
                    <div className='new-post-additional'>
                        <div>
                            <IconButton className='action-icons'>
                                <ImageOutlined  fontSize='small'/>
                            </IconButton>
                            <IconButton className='action-icons'>
                                <GifBoxOutlined fontSize='small'/>
                            </IconButton>
                            <IconButton className='action-icons'>
                                <PollOutlined fontSize='small'/>
                            </IconButton>
                            <IconButton className='action-icons'>
                                <EmojiEmotionsOutlined fontSize='small'/>
                            </IconButton>
                            <IconButton className='action-icons'>
                                <InsertInvitationOutlined fontSize='small'/>
                            </IconButton>
                            <IconButton className='action-icons'>
                                <FmdGoodOutlined fontSize='small'/>
                            </IconButton>
                        </div>
                        <div>
                            <Button className='tweet-btn' variant='contained'>
                                Tweet
                            </Button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CreatePost;