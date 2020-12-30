import { useEffect, useState } from 'react';
import '../src/css/App.css';
import Login from './component/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './component/Player';

const spotify = new SpotifyWebApi();
function App() {
  const [token, setToken] = useState(null);

  // run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    console.log('selam ben token', token);

    //if there is a token, do this
    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log(user);
      });
    }
  }, []);
  return <div className='app'>{token ? <Player /> : <Login />}</div>;
}

export default App;
