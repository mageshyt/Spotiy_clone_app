import { useEffect, useState } from "react";
import spotifyApi from "../lib/spotify";

const { createContext } = require("react");

export const SpotifyContext = createContext({});

export const SpotifyProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [playList, setPlaylist] = useState(null);
  const [category, setCategory] = useState(null);
  const [user, setUser] = useState(null);
  const [FeaturedPlaylists, setFeaturedPlaylists] = useState(null);
  useEffect(() => {
    if (token) {
      if (spotifyApi.getAccessToken()) {
        // ! get user data
        spotifyApi?.getMe().then((data) => {
          setUser(data);
        });
        //! get user playList
        spotifyApi.getUserPlaylists().then((data) => {
          setPlaylist(data.items);
        });

        //! get category
        spotifyApi.getCategories().then((data) => {
          setCategory(data);
        });
        //! get category playlists
        spotifyApi.getFeaturedPlaylists().then((data) => {
          setFeaturedPlaylists(data);
        });
      }
    }
  }, [token]);

  value = { token, setToken, playList, category, user, FeaturedPlaylists };

  return (
    <SpotifyContext.Provider value={value}>{children}</SpotifyContext.Provider>
  );
};
