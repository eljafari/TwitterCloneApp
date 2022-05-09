import { useEffect, useState } from 'react';
import suggesionDummyData from '../../constants/suggestions-dummy-data.json';
import './index.css';

const WhatsHappeningSection = () => {
    const [suggestions, setSuggestions] = useState([]);
    
    useEffect(() => {
        setSuggestions(suggesionDummyData);
    }, []);
    return (
        <div className="suggestion-section">
            <div className="suggestion-header">
                <h2>What's Happening</h2>
            </div>
            {
                suggestions.map((s, index) => (
                    <div className='suggestion-body'>
                        <div>
                            <p className='suggestion-grey-text font-size-13'>{s.category}</p>
                            <div className='suggestion-content'>
                                <div>
                                    <p className='font-size-15 font-weight-700'>{s.text}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            {s.image && <img className='suggestion-img' src={`https://picsum.photos/550/300?random=${index + 80}`} alt='Tweet Image'/>}
                        </div>
                    </div>
                ))
            }
           
        </div>
    )
}
export default WhatsHappeningSection;