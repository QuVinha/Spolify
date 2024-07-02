import "./Nav.css";
import Search from "../Search/Search";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import APIKit from "../../Content/Spolify/Spolify.js";
import ImgPhatGan6 from "../../assets/img/ImgContentFY/PhatGan6.png";
import ImgPhatGan7 from "../../assets/img/ImgContentFY/PhatGan7.png";
import ImgPhatGan9 from "../../assets/img/ImgContentFY/PhatGan9.png";
import ImgPhatGan10 from "../../assets/img/ImgContentFY/PhatGan10.png";
import ImgContentFy7 from "../../assets/img/ImgContentFY/VietChuaLanh.png";
import ImgContentFy9 from "../../assets/img/ImgContentFY/MayKeChuyen.png";
import ImgContentFy4 from "../../assets/img/ImgContentFY/Thuan.png";
import ImgPhatGan11 from "../../assets/img/ImgContentFY/PhatGan11.png";

const Nav = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const handleNavigateS = () => {
    navigate("/search");
  };

  const [playlists, setPlaylists] = useState(null);

  // RANDOM 4 bai hat trong playlist
  const getRandomIndices = (max, count) => {
    const indices = [];
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  };

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      const playlists = response.data.items;
      const randomIndices = getRandomIndices(playlists.length, 15);
      const randomPlaylists = randomIndices.map((index) => playlists[index]);
      setPlaylists(randomPlaylists);
    });
  }, []);

  return (
    <div style={{ height: "540px" }}>
      <div className="ContentLeft">
        <ul className="Search">
          <li onClick={handleNavigate} className="Search1">
            <a className="IconHome">
              <i class="fa-solid fa-house"></i>
            </a>
            <a className="SearchP">
              <p>Trang chủ</p>
            </a>
          </li>

          <li onClick={handleNavigateS} className="Search2">
            <a className="IconHome">
              <i class="fa-solid fa-magnifying-glass"></i>
            </a>
            <a className="SearchP">
              <p>Tìm kiếm</p>
            </a>
          </li>
        </ul>

        <div className="Library">
          <div className="LibraryHeader">
            <li className="Search1">
              <a className="IconBars">
                <i class="fa-solid fa-bars"></i>
              </a>
              <a className="SearchP">
                <p>Thư viện</p>
              </a>
            </li>
          </div>

          <div className="LibraryContent">
            {playlists?.map((playlist) => (
              <div className="LiContent" key={playlist.id}>
                <div className="FavoriteSong">
                  <div className="FavoriteLeft">
                    <div className="ImgFavoriteSong">
                      <img src={playlist.images[0]?.url} alt={playlist.name} />
                    </div>
                  </div>
                  <div className="FavoriteRight">
                    <div className="Name&ActorSong">
                      <div className="NameFSong">
                        <p>{playlist.name}</p>
                      </div>
                      <div className="ActorFSong">
                        {/* <p>{playlist.owner.display_name}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
