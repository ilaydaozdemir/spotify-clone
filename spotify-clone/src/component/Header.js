import React from 'react';
import '../css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';

function Header() {
  return (
    <div className='header'>
      <div className='header_left'>
        <SearchIcon />
        <input placeholder='Seacrh for Artist,Songs..' type='text' />
      </div>
      <div className='header_right'>
        <Avatar src='' alt='RQ' />
        <h4>İlayda Özdemir</h4>
      </div>
    </div>
  );
}

export default Header;
