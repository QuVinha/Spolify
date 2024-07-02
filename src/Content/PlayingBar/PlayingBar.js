import React, { useState, useEffect, useContext } from "react";
import "./PlayingBar.css";
import { PlayerContext } from "../PlayerContext";
import { useNavigate, useLocation } from "react-router-dom";
import apiClient from "../../Content/Spolify/Spolify.js";
import ImgPhatGan12 from "../../assets/img/ImgContentFY/PhatGan12.png";

const PlayingBar = () => {
  const [song, setSong] = useState(null);
  const [tracks, setTracks] = useState([]);
  const { currentSongId } = useContext(PlayerContext);

  useEffect(() => {
    if (currentSongId) {
      apiClient.get("playlists/" + currentSongId).then((res) => {
        setSong(res.data);
      });
    }
  }, [currentSongId]);

  useEffect(() => {
    if (currentSongId) {
      apiClient.get("playlists/" + currentSongId + "/tracks").then((res) => {
        setTracks(res.data.items);
      });
    }
  }, [currentSongId]);

  return (
    <>
      <div className="Playing-Bar">
        <div className="SongI4-Playing-Bar">
          <div className="SongI4-Img">
            <img src={song?.images[0]?.url} alt="" />
          </div>

          <div className="SongI4-Name&Actors">
            <div className="SongI4-Name">{song?.name}</div>
            <div className="SongI4-Actors">
              {" "}
              {tracks.length > 0 && (
                <p>
                  {tracks[0].track.artists.map((artist, index) => (
                    <span key={artist.id}>
                      {artist.name}
                      {index < tracks[0].track.artists.length - 1 && ", "}
                    </span>
                  ))}{" "}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayingBar;
