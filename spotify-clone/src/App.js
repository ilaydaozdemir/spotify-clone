import { useEffect, useState } from 'react';
import '../src/css/App.css';
import Login from './component/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();
function App() {
  const [token, setToken] = useState(null);

  // run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    console.log('selam ben token', token);
    if (_token) {
      setToken(_token);
    }
  }, []);
  return <div className='app'>{token ? <h1>logged in</h1> : <Login />}</div>;
}

export default App;
