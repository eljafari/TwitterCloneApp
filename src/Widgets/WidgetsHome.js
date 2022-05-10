import React from 'react';
import Suggestions from '../HomePage/components/Suggestions';
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';

export default function WidgetsHome() {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
        <SearchIcon className='widgets-seachIcon'/>
        <input className='inputbox' placeholder='Search Twitter' type="text"/>
      </div>
      <div className="widgets_widgetContainer">
        <Suggestions />
      </div>
    </div>
  )
}
