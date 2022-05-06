import { IconButton } from '@mui/material';
import { ChatBubbleOutlineOutlined, FavoriteBorderOutlined, IosShareOutlined, MoreHoriz, RepeatOutlined, Verified } from '@mui/icons-material';
import { monthsStringMap } from '../../constants/month-const';
import './index.css';

const Tweet = ({tweetInfo, index}) => {
    const { fullName, username, date, verified, text, image } = tweetInfo;

    const convertDateTime = (dateTimeString) => {
        const nowMs = new Date().getTime();
        const dateTime = new Date(dateTimeString);
        const dateTimeMs = dateTime.getTime();
        const hrs = Math.abs(nowMs - dateTimeMs) / 60000;
        if (hrs < 24) {
            return `${hrs}h`;
        }
        const d = dateTime.getDay();
        const m = dateTime.getMonth() + 1;

        return `${monthsStringMap[m]} ${d}`;
    }

    return (
        <div className='tweet-container'>
            <div className='tweet-user-img'>
                <img src={`https://picsum.photos/200/300?random=${index}`} alt='User profile image' />
            </div>
            <div className='tweet'>
                <div className='tweet-header'>
                    <div className='title'>
                        <span className='fName'> {fullName} </span>
                        <span> { verified && <Verified className='verified' fontSize='small'/> } </span>
                        <span className='uName'> @{username} </span>
                        <span> . </span>
                        <span>{convertDateTime(date)}</span>
                    </div>
                    <div className='actions'>
                        <IconButton>
                            <MoreHoriz />
                        </IconButton>
                    </div>
                </div>
                <div className='tweet-body'>
                    <p>{text}</p>
                    {
                        image && 
                        <img src={`https://picsum.photos/550/300?random=${index + 40}`} alt='Tweet Image' />
                    }
                </div>
                <div className='tweet-footer'>
                    <IconButton>
                        <ChatBubbleOutlineOutlined fontSize='small'/>
                    </IconButton>
                    <IconButton>
                        <RepeatOutlined fontSize='small'/>
                    </IconButton>
                    <IconButton>
                        <FavoriteBorderOutlined fontSize='small'/>
                    </IconButton>
                    <IconButton>
                        <IosShareOutlined fontSize='small'/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Tweet;