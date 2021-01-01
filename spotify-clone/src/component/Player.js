import React from 'react';
import '../css/Player.css';
import Sidebar from '../component/Sidebar';
import Body from '../component/Body';
import Footer from '../component/Footer';

function Player({ spotify }) {
  return (
    <div className='player'>
      <div className='player_body'>
        {/*Sidebar */}
        <Sidebar />

        {/*Body */}
        <Body spotify={spotify} />
      </div>
      {/*Footer */}
      <Footer />
    </div>
  );
}

export default Player;
