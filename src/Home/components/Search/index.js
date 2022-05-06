import './index.css';
import { Search } from '@mui/icons-material';

const SearchBox = () => {
    return (
        <div className="search-box">
            <div>
                <Search />
            </div>
            <div className='search-input-wrapper'>
                <input className='search-input' placeholder='Search Twitter' />
            </div>
        </div>
    );
}

export default SearchBox;