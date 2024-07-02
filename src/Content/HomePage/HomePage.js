import React, { useState, useEffect } from "react";
import APIKit from "../../Content/Spolify/Spolify.js";
import "./HomePage.css";
import PlayingBar from "../PlayingBar/PlayingBar.js";
import Header from "../HeaderContent/Header";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import IconPlay from "../../assets/img/Icon/IconPlay.png";
import ImgContentFy7 from "../../assets/img/ImgContentFY/VietChuaLanh.png";
import ImgContentFy8 from "../../assets/img/ImgContentFY/Phieu.png";
import ImgContentFy9 from "../../assets/img/ImgContentFY/MayKeChuyen.png";
import ImgPhatGan1 from "../../assets/img/ImgContentFY/PhatGan1.png";
import ImgPhatGan2 from "../../assets/img/ImgContentFY/PhatGan2.png";
import ImgPhatGan3 from "../../assets/img/ImgContentFY/PhatGan3.png";
import ImgPhatGan4 from "../../assets/img/ImgContentFY/PhatGan4.png";
import ImgPhatGan5 from "../../assets/img/ImgContentFY/PhatGan5.png";
import ImgPhatGan6 from "../../assets/img/ImgContentFY/PhatGan6.png";
import ImgPhatGan7 from "../../assets/img/ImgContentFY/PhatGan7.png";
import ImgPhatGan8 from "../../assets/img/ImgContentFY/PhatGan8.png";
import ImgPhatGan9 from "../../assets/img/ImgContentFY/PhatGan9.png";
import ImgPhatGan10 from "../../assets/img/ImgContentFY/PhatGan10.png";
import ImgPhatGan11 from "../../assets/img/ImgContentFY/PhatGan11.png";
import ImgPhatGan12 from "../../assets/img/ImgContentFY/PhatGan12.png";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate("/details");
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsHovered(false);
  };

  // const [selectedSong, setSelectedSong] = useState(null);

  // // Cập nhật bài hát được chọn
  // const handleSongSelect = (song) => {
  //   setSelectedSong(song);
  // };
  const [showDetails, setShowDetails] = useState(false);

  const handleSongClick = () => {
    setShowDetails(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100;

      if (scrollY > threshold && !isHeaderFixed) {
        setIsHeaderFixed(true);
      } else if (scrollY <= threshold && isHeaderFixed) {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHeaderFixed]);

  const [playlists, setPlaylists] = useState(null);
  const [playlists2, setPlaylists2] = useState(null);
  const [FeaturedPlaylists, setFeaturedPlaylists] = useState(null);

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
      console.log(response.data);
      const randomIndices = getRandomIndices(playlists.length, 6);
      const randomPlaylists = randomIndices.map((index) => playlists[index]);
      setPlaylists(randomPlaylists);

      const randomIndices2 = getRandomIndices(playlists.length, 4);
      const randomPlaylists2 = randomIndices2.map((index) => playlists[index]);
      setPlaylists2(randomPlaylists2);
    });
  }, []);

  // useEffect(() => {
  //   APIKit.get("/playlists/tracks").then(function (response) {
  //     console.log("Day la Track:", response.data);
  //   });
  // });

  const playPlaylist = (id) => {
    navigate("/details", { state: { id: id } });
  };

  return (
    <div id="main">
      <div className="ContentHome">
        <Nav />

        <div className="ContentRight">
          <Header className={isHeaderFixed ? "FixedHeader" : ""} />

          <>
            <div
              className="ForYou"
              style={{
                backgroundColor:
                  hoveredIndex !== null
                    ? playlists[hoveredIndex].backgroundColor
                    : "#121212",
                backgroundImage:
                  hoveredIndex !== null
                    ? `linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212),url(${playlists[hoveredIndex]?.images[0].url})`
                    : "none",
              }}
            >
              <div className="TitleForYou">
                <div className="TitleFY">
                  <h1>Dành cho bạn</h1>
                </div>
              </div>

              <div className="ListForYou">
                <div className="ContentListFY">
                  {playlists?.map((playlist, index) => (
                    <div
                      key={playlist.id}
                      className="ContentFY "
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => playPlaylist(playlist.id)}
                    >
                      <div className="ImgContentFY">
                        <img src={playlist.images[0].url} className="" alt="" />
                      </div>
                      <div className="NameContentFy">
                        -<p>{playlist.name}</p>
                        {isHovered && hoveredIndex === index && (
                          <img className="IconPlay" src={IconPlay} alt="" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="TitleFavorite1">
                <div className="TitleFV">
                  <h2>Chương trình yêu thích</h2>
                </div>
              </div>
            </div>

            {/* CHƯƠNG TRÌNH YÊU THÍCH */}
            <div className="FavoriteProgram">
              <div className="ContentFavorite">
                {playlists2?.map((playlist) => (
                  <div
                    className="ElementFavorite"
                    key={playlist.id}
                    onClick={() => playPlaylist(playlist.id)}
                  >
                    <div className="ImgFavorite">
                      <img src={playlist.images[0].url} className="" alt="" />
                    </div>

                    <div className="NameFavorite">
                      <p className="TitleName">{playlist.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CHƯƠNG TRÌNH YÊU THÍCH */}

            {/* PHÁT GẦN ĐÂY */}

            <div className="FavoriteProgram">
              <div className="TitleFavorite">
                <div className="TitleFV">
                  <h2>Phát gần đây</h2>
                </div>
              </div>

              <div className="ContentFavorite">
                <div className="ElementFavorite" onClick={handleNavigate}>
                  <div className="ImgFavorite">
                    <img src={ImgPhatGan1} alt="" />
                  </div>
                  <div className="NameFavorite">
                    <div className="TitleName">Đứa trẻ xấu xí</div>
                    <div className="AuthorName">Vì sao thế nhỉ?</div>
                  </div>
                </div>

                <div className="ElementFavorite" onClick={handleNavigate}>
                  <div className="ImgFavorite">
                    <img src={ImgPhatGan2} alt="" />
                  </div>
                  <div className="NameFavorite">
                    <div className="TitleName">Gen Z tập lớn</div>
                    <div className="AuthorName">hoangphuonglinh</div>
                  </div>
                </div>

                <div className="ElementFavorite">
                  <div className="ImgFavorite">
                    <img src={ImgPhatGan3} alt="" />
                  </div>
                  <div className="NameFavorite">
                    <div className="TitleName">Bình thường hoá</div>
                    <div className="AuthorName">Vanesa</div>
                  </div>
                </div>

                <div className="ElementFavorite">
                  <div className="ImgFavorite">
                    <img src={ImgPhatGan4} alt="" />
                  </div>
                  <div className="NameFavorite">
                    <div className="TitleName">Dáng xinh</div>
                    <div className="AuthorName">Low G, Trungng</div>
                  </div>
                </div>
              </div>
            </div>

            {/* PHÁT GẦN ĐÂY */}

            {/* DÀNH CHO V */}

            <div className="FavoriteProgram">
              <div className="TitleFavorite">
                <div className="TitleFV">
                  <h2>Dành cho V</h2>
                </div>
              </div>

              <div className="ContentFavorite">
                <div className="ElementFavorite">
                  <div className="ImgFavorite">
                    <img src={ImgPhatGan5} alt="" />
                  </div>
                  <div className="NameFavorite">
                    <div className="TitleName">Vincent Radio</div>
                    <div className="AuthorName">Vincent Radio</div>
                  </div>
                </div>

                <div className="ElementFavorite">
                  <div className="ImgFavorite">
                    <img src={ImgPhatGan6} alt="" />
                  </div>
                  <div className="NameFavorite">
                    <div className="TitleName">Kể cho tôi nghe</div>
                    <div className="AuthorName">Radio Giữ Kỉ Niệm</div>
                  </div>
                </div>

                <div className="ElementFavorite">
                  <div className="ImgFavorite">
                    <img src={ImgPhatGan7} alt="" />
                  </div>
                  <div className="NameFavorite">
                    <div className="TitleName">Tree ở đây</div>
                    <div className="AuthorName">Thuỳ Tree</div>
                  </div>
                </div>

                <div className="ElementFavorite">
                  <div className="ImgFavorite">
                    <img src={ImgPhatGan8} alt="" />
                  </div>
                  <div className="NameFavorite">
                    <div className="TitleName">Discovery Weekly</div>
                    <div className="AuthorName">Suwl_</div>
                  </div>
                </div>
              </div>
            </div>

            {/* DÀNH CHO V */}

            {/* LỰA CHỌN CỦA SPOLIFY */}

            <div className="FavoriteProgram">
              <div className="TitleFavorite">
                <div className="TitleFV">
                  <h2>Lựa chọn của Spolify</h2>
                </div>
              </div>

              <div className="ContentFavorite">
                <div className="ElementFavorite">
                  <div className="ImgFavorite">
                    <img src={ImgContentFy9} alt="" />
                  </div>
                  <div className="NameFavorite">
                    <div className="TitleName">Mây kể chuyện</div>
                    <div className="AuthorName">M.</div>
                  </div>
                </div>

                <div className="ElementFavorite">
                  <div className="ImgFavorite">
                    <img src={ImgContentFy8} alt="" />
                  </div>
                  <div className="NameFavorite">
                    <div className="TitleName">Phiêu nói nhiều</div>
                    <div className="AuthorName">Phiêu's Podcast</div>
                  </div>
                </div>

                <div className="ElementFavorite">
                  <div className="ImgFavorite">
                    <img src={ImgContentFy7} alt="" />
                  </div>
                  <div className="NameFavorite">
                    <div className="TitleName">Viết Chữa Lành</div>
                    <div className="AuthorName">Writing theraphy</div>
                  </div>
                </div>

                <div className="ElementFavorite">
                  <div className="ImgFavorite">
                    <img src={ImgPhatGan12} alt="" />
                  </div>
                  <div className="NameFavorite">
                    <div className="TitleName">Từng quen</div>
                    <div className="AuthorName">Wren Evans, itsnk</div>
                  </div>
                </div>
              </div>

              <Footer />
            </div>
          </>

          {/* LỰA CHỌN CỦA SPOLIFY */}
        </div>
      </div>
      <div>
        <PlayingBar />
      </div>
    </div>
  );
}

export default HomePage;
