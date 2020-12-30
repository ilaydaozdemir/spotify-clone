import { useEffect } from 'react';
import '../src/css/App.css';
import Login from './component/Login';
import { getTokenFromUrl } from './spotify';

function App() {
  // run code based on a given condition
  useEffect(() => {
    const token = getTokenFromUrl();
    console.log('selam ben token', token);
  }, []);
  return (
    <div className='app'>
      <Login />
    </div>
  );
}

export default App;
