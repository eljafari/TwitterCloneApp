import React from 'react';
import './SidebarOption.css';

export default function SidebarOption({active, text, icon}) {
  return (
      <div className={`sidebarOption ${active && 'sidebarOption--active'}`} to={`/${text}`} >
        <div>{icon}</div>
        <h2> {text} </h2>
      </div>
  )
}
