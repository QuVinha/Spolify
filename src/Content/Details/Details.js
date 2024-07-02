import "./Details.css";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import apiClient from "../../Content/Spolify/Spolify.js";
import APIKit from "../../Content/Spolify/Spolify.js";
import { PlayerContext } from "../PlayerContext";
import Nav from "../Nav/Nav";
import Header from "../HeaderContent/Header";
import Footer from "../Footer/Footer";
import PlayingBar from "../PlayingBar/PlayingBar.js";
import ImgContentFy9 from "../../assets/img/ImgContentFY/MayKeChuyen.png";
import HieuThu2 from "../../assets/img/ImgContentFY/HieuThu2.png";
import IconPlayD from "../../assets/img/Icon/IconPlayD.png";
import NgheNhuTinhYeu from "../../assets/img/ImgContentFY/NgheNhuYeu.png";
import KhongTheSay from "../../assets/img/ImgContentFY/KhongTheSay.png";
import NguMotMinh from "../../assets/img/ImgContentFY/NguMotMinh.png";
import HenGapDuoiAT from "../../assets/img/ImgContentFY/HenGapDuoiAT.png";
import Mamma from "../../assets/img/ImgContentFY/Mamma.png";
import Rhyder from "../../assets/img/ImgContentFY/Rhyder.png";
import ObitoA from "../../assets/img/ImgContentFY/ObitoA.png";
import Pliz from "../../assets/img/ImgContentFY/Pliz.png";
import WokeUp from "../../assets/img/ImgContentFY/WokeUp.png";
import Andree from "../../assets/img/ImgContentFY/Andree.png";

function Details() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [song, setSong] = useState(null);
  const [tracks, setTracks] = useState([]);
  const navigate = useNavigate();

  const location = useLocation();
  const songId = location.state?.id;
  const { setCurrentSongId } = useContext(PlayerContext);

  const handleNavigate = () => {
    navigate("/artist");
  };

  const handlePlayClick = () => {
    setCurrentSongId(songId); // Set the song ID in context
  };

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      const playlists = response.data;
    });
  }, []);

  useEffect(() => {
    if (songId) {
      apiClient.get("playlists/" + songId).then((res) => {
        setSong(res.data);
        console.log("DAY LA SONG ID: ", songId);
      });
    }
  }, [songId]);

  useEffect(() => {
    if (songId) {
      apiClient.get("playlists/" + songId + "/tracks").then((res) => {
        setTracks(res.data.items);
        console.log("Day la track trong details:", res.data.items);
      });
    }
  }, [songId]);

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

  return (
    <div id="main">
      <div className="ContentHome">
        <Nav />
        <div className="ContentRight">
          <Header className={isHeaderFixed ? "FixedHeader" : ""} />
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0, #121212),url(${song?.images[0]?.url})`,
            }}
            className="DetailsTilte "
          >
            <div className="ContentDTitle">
              <div className="ImgDTitle">
                <img src={song?.images[0]?.url} alt="" />
              </div>

              <div className="NameDTitle">
                <div>
                  <p>Bài hát</p>
                </div>
                <div>
                  <h1>{song?.name}</h1>
                </div>
                <div>
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

            <div className="DetailsPlay">
              <div className="DetailsPlayIcon" onClick={handlePlayClick}>
                <img className="IconPlayD" src={IconPlayD} alt="" />
              </div>

              <div className="DetailsPlayPlus">
                <i class="fa-regular fa-square-plus"></i>
              </div>

              <div className="DetailsPlayDots">
                <i class="fa-solid fa-ellipsis"></i>
              </div>
            </div>
          </div>

          <div className="DetailsPropose">
            <h1>Đề xuất</h1>
            <p>Dựa trên bài hát này</p>
          </div>
          <div className="MusicPropose">
            <div className="BigMusicPro">
              <div className="SongsPro">
                <div className="SongsImg">
                  <img src={KhongTheSay} alt="" />
                </div>

                <div className="SongsName">
                  <div className="Name&ActorSongPro">
                    <div className="NameSongPro">
                      <p>Không Thể Say</p>
                    </div>
                    <div className="ActorSongPro">
                      <p>HIEUTHUHAI</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ViewTimeProS">
                <p>30.224.615</p>
              </div>

              <div style={{}} className="ViewTimeProS">
                <p>3:08</p>
              </div>
            </div>

            <div className="BigMusicPro">
              <div className="SongsPro">
                <div className="SongsImg">
                  <img src={NguMotMinh} alt="" />
                </div>

                <div className="SongsName">
                  <div className="Name&ActorSongPro">
                    <div className="NameSongPro">
                      <p>Ngủ một mình (tình rất tình)</p>
                    </div>
                    <div className="ActorSongPro">
                      <p>HIEUTHUHAI,Negav,Kewtiie</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ViewTimeProS">
                <p>25.192.962</p>
              </div>

              <div className="ViewTimeProS">
                <p>3:12</p>
              </div>
            </div>

            <div className="BigMusicPro">
              <div className="SongsPro">
                <div className="SongsImg">
                  <img src={HenGapDuoiAT} alt="" />
                </div>

                <div className="SongsName">
                  <div className="Name&ActorSongPro">
                    <div className="NameSongPro">
                      <p>Hẹn Gặp Em Dưới Ánh Trăng</p>
                    </div>
                    <div className="ActorSongPro">
                      <p>MANBO,HIEUTHUHAI,HURRYKNG</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ViewTimeProS">
                <p>15.245.132</p>
              </div>

              <div className="ViewTimeProS">
                <p>3:42</p>
              </div>
            </div>

            <div className="BigMusicPro">
              <div className="SongsPro">
                <div className="SongsImg">
                  <img src={Mamma} alt="" />
                </div>

                <div className="SongsName">
                  <div className="Name&ActorSongPro">
                    <div className="NameSongPro">
                      <p>Mamma Mia</p>
                    </div>
                    <div className="ActorSongPro">
                      <p>HIEUTHUHAI,HURRYKNG,MANBO</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ViewTimeProS">
                <p>26.282.154</p>
              </div>

              <div className="ViewTimeProS">
                <p>3:53</p>
              </div>
            </div>

            <div className="BigMusicPro">
              <div className="SongsPro">
                <div className="SongsImg">
                  <img src={NgheNhuTinhYeu} alt="" />
                </div>

                <div className="SongsName">
                  <div className="Name&ActorSongPro">
                    <div className="NameSongPro">
                      <p>Nghe Như Tình Yêu</p>
                    </div>
                    <div className="ActorSongPro">
                      <p>HIEUTHUHAI</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ViewTimeProS">
                <p>20.182.854</p>
              </div>

              <div className="ViewTimeProS">
                <p>3:13</p>
              </div>
            </div>
          </div>

          <div className="TitleDetails">
            <div className="TilteDT">
              <h1>Các bản phát hành thịnh hành của HIEUTHUHAI</h1>
            </div>
          </div>

          <div className="MusicProsperity">
            <div className="SongsProsperity">
              <div className="SongsProsperityImg">
                <img src={KhongTheSay} alt="" />
              </div>

              <div className="SongsProsperityName">
                <div className="Name&ActorSongProsperity">
                  <div className="NameSongProsperity">
                    <p>Không Thể Say</p>
                  </div>
                  <div className="ActorSongProsperity">
                    <p>HIEUTHUHAI</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="SongsProsperity">
              <div className="SongsProsperityImg">
                <img src={NguMotMinh} alt="" />
              </div>

              <div className="SongsProsperityName">
                <div className="Name&ActorSongProsperity">
                  <div className="NameSongProsperity">
                    <p>Ngủ một mình</p>
                  </div>
                  <div className="ActorSongProsperity">
                    <p>HIEUTHUHAI,Negav</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="SongsProsperity">
              <div className="SongsProsperityImg">
                <img src={NgheNhuTinhYeu} alt="" />
              </div>

              <div className="SongsProsperityName">
                <div className="Name&ActorSongProsperity">
                  <div className="NameSongProsperity">
                    <p>Nghe Như Tình Yêu</p>
                  </div>
                  <div className="ActorSongProsperity">
                    <p>HIEUTHUHAI</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="SongsProsperity">
              <div className="SongsProsperityImg">
                <img src={HieuThu2} alt="" />
              </div>

              <div className="SongsProsperityName">
                <div className="Name&ActorSongProsperity">
                  <div className="NameSongProsperity">
                    <p>Ai Cũng Phải Bắt Đ..</p>
                  </div>
                  <div className="ActorSongProsperity">
                    <p>HIEUTHUHAI</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="SongsProsperity">
              <div className="SongsProsperityImg">
                <img src={HenGapDuoiAT} alt="" />
              </div>

              <div className="SongsProsperityName">
                <div className="Name&ActorSongProsperity">
                  <div className="NameSongProsperity">
                    <p>Hẹn Gặp Dưới Ánh..</p>
                  </div>
                  <div className="ActorSongProsperity">
                    <p>HIEUTHUHAI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="TitleDetails">
            <div className="TilteDT">
              <h1>Fan cũng thích</h1>
            </div>
          </div>

          <div className="AnotherArtist">
            <div className="AnotherArtistA">
              <div className="AnotherArtistImg">
                <img src={Andree} alt="" />
              </div>

              <div className="AnotherArtistName">
                <div className="Name&ActorAnotherArtist">
                  <div className="NameAnotherArtist">
                    <p>Andree Right Hand</p>
                  </div>
                  <div className="ActorAnotherArtist">
                    <p>Nghệ sĩ</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="AnotherArtistA">
              <div className="AnotherArtistImg">
                <img src={WokeUp} alt="" />
              </div>

              <div className="AnotherArtistName">
                <div className="Name&ActorAnotherArtist">
                  <div className="NameAnotherArtist">
                    <p>WOKEUP</p>
                  </div>
                  <div className="ActorAnotherArtist">
                    <p>Nghệ sĩ</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="AnotherArtistA">
              <div className="AnotherArtistImg">
                <img src={Pliz} alt="" />
              </div>

              <div className="AnotherArtistName">
                <div className="Name&ActorAnotherArtist">
                  <div className="NameAnotherArtist">
                    <p>2pillz</p>
                  </div>
                  <div className="ActorAnotherArtist">
                    <p>Nghệ sĩ</p>
                  </div>
                </div>
              </div>
            </div>

            <div onClick={handleNavigate} className="AnotherArtistA">
              <div className="AnotherArtistImg">
                <img src={ObitoA} alt="" />
              </div>

              <div className="AnotherArtistName">
                <div className="Name&ActorAnotherArtist">
                  <div className="NameAnotherArtist">
                    <p>Obito</p>
                  </div>
                  <div className="ActorAnotherArtist">
                    <p>Nghệ sĩ</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="AnotherArtistA">
              <div className="AnotherArtistImg">
                <img src={Rhyder} alt="" />
              </div>

              <div className="AnotherArtistName">
                <div className="Name&ActorAnotherArtist">
                  <div className="NameAnotherArtist">
                    <p>Rhyder</p>
                  </div>
                  <div className="ActorAnotherArtist">
                    <p>Nghệ sĩ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="DetailsFooter">
            <Footer />
          </div>
        </div>
      </div>
      <div>
        <PlayingBar />
      </div>
    </div>
  );
}

export default Details;
