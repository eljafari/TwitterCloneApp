import React from 'react';
import SearchBox from '../Home/components/Search';
import Suggestions from '../Home/components/Suggestions';
import WhatsHappeningSection from '../Home/components/WhatsHappeningSection';
import './Widgets.css';

export default function Widgets() {
  return (
    <div className='widgets'>
      <div>
        <SearchBox />
      </div>
      <Suggestions />
    </div>
  )
}
