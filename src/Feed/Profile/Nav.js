import { Button, ButtonGroup } from '@mui/material';
import React from 'react';
import "./Nav.css";

export default function Nav() {
  return (
    <div className='nav'>
        <ButtonGroup className='navButtonGroup'  disableElevation variant="contained">
            <Button  className='navButton'>Tweets</Button>
            <Button className='navButton'>Tweets & replies</Button>
            <Button className='navButton'>Media</Button>
            <Button className='navButton'>Likes</Button>
        </ButtonGroup>
    </div>
  )
}
