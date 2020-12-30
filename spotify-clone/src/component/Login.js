import React from 'react';
import '../css/Login.css';

function Login() {
  return (
    <div className='login'>
      {/*Spotify logo */}
      <img
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt=''
      />

      {/*Login with Spotify button */}
      <button>LOGIN WITH SPOTIFY</button>
    </div>
  );
}

export default Login;
