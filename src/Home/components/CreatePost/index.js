import { ImageOutlined, GifBoxOutlined, PollOutlined, EmojiEmotionsOutlined, InsertInvitationOutlined, FmdGoodOutlined } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import './index.css';

const CreatePost = () => {

    return (
        <div className='create-post-container'>
                <div className='user-profile-image'>
                    <img src='https://img.freepik.com/free-vector/smiling-girl-avatar_102172-32.jpg'  />
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
                            <button className='tweet-btn' variant='contained'>
                                Tweet
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CreatePost;