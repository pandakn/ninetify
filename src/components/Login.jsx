import "../styles/login.scss"

function Login() {
  const REDIRECT_URI = "http://127.0.0.1:5173";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  
  return (
    <a
      className="login-btn"
      href={`${AUTH_ENDPOINT}?client_id=${import.meta.env.VITE_CLIENT_ID_KEY}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
    >
      Login to Spotify
    </a>
  );
}

export default Login;
