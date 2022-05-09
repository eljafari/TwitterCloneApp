import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { AutoAwesomeOutlined } from '@mui/icons-material';
import dummyData from './constants/dummy-data.json';
import './index.css';
import Tweet from './components/Tweet';
import CreatePost from './components/CreatePost';

const Home = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setTweets(dummyData);
    }

    return (
        <div className='home'>
            <div className='home-header-container'>
                <div className='home-header'>
                    <div className='home-header-content'>
                        <h2>Home</h2>
                    </div>
                    <div>
                        <IconButton>
                            <AutoAwesomeOutlined /> 
                        </IconButton>
                    </div>
                </div>
                <div>
                    <CreatePost />
                </div>
            </div>

            {
                tweets.map((tweet, index) => (
                    <Tweet
                        key={index}
                        index={index}
                        tweetInfo={tweet}
                    />
                ))
            }
        </div> 
    )
}

export default Home;