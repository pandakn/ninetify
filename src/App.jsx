import { useState, useEffect } from "react";
import axios from "axios";

import "./App.scss";

import Track from "./components/Track";
import SearchBar from "./components/SearchBar";
import Home from "./pages/Home";

function App() {
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    window.location.reload();
  };

  const searchTracks = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "track",
        limit: 9,
      },
    });

    console.log(data.tracks.items);

    setTracks(data.tracks.items);
  };

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <header className="App-header">
      <div className="wrap">
        {token && (
          <SearchBar searchTracks={searchTracks} handleChange={handleChange} />
        )}
        {!token ? <Home /> : <button className="logout" onClick={logout}>Logout</button>}

      </div>

      {tracks && <Track tracks={tracks} />}

    </header>
  );
}

export default App;
