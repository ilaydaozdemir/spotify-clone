import { useEffect, useState } from 'react';
import '../src/css/App.css';
import Login from './component/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './component/Player';
import { useDataLayerValue } from './component/DataLayer';

const spotify = new SpotifyWebApi();
function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  // run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    //if there is a token, do this
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
    }
  }, []);

  return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
