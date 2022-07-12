import { useState } from "react";

const { createContext } = require("react");

export const SpotifyContext = createContext({});

export const SpotifyProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  value = { token, setToken };

  return (
    <SpotifyContext.Provider value={value}>{children}</SpotifyContext.Provider>
  );
};
