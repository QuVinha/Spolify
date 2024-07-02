import React, { createContext, useState } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentSongId, setCurrentSongId] = useState(null);

  return (
    <PlayerContext.Provider value={{ currentSongId, setCurrentSongId }}>
      {children}
    </PlayerContext.Provider>
  );
};
