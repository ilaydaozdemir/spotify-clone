//click Login
export const authEndpoint = 'https://accounts.spotify.com/authorize';

//redirect to Spotify login page
const redirectUri = 'http://localhost:3000/';

//redirect to home page once logged in
const clientId = 'faabeeb5b7184d35b0e1fb79d37b1f57';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

//The url that will appear when logged in
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
