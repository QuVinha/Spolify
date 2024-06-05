import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import Header from "../HeaderContent/Header";
import Footer from "../Footer/Footer";
import "./Artist.css";
import TichXanh from "../../assets/img/Icon/checklist.png";
import BGObito from "../../assets/img/BG-Obito.jpeg";
import IconPlayD from "../../assets/img/Icon/IconPlayD.png";
import NgheNhuTinhYeu from "../../assets/img/ImgContentFY/NgheNhuYeu.png";
import KhongTheSay from "../../assets/img/ImgContentFY/KhongTheSay.png";
import NguMotMinh from "../../assets/img/ImgContentFY/NguMotMinh.png";
import HenGapDuoiAT from "../../assets/img/ImgContentFY/HenGapDuoiAT.png";
import Mamma from "../../assets/img/ImgContentFY/Mamma.png";
import HieuThu2 from "../../assets/img/ImgContentFY/HieuThu2.png";
import Rhyder from "../../assets/img/ImgContentFY/Rhyder.png";
import ObitoA from "../../assets/img/ImgContentFY/ObitoA.png";
import Pliz from "../../assets/img/ImgContentFY/Pliz.png";
import WokeUp from "../../assets/img/ImgContentFY/WokeUp.png";
import Andree from "../../assets/img/ImgContentFY/Andree.png";

const Artist = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/artist");
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

  return (
    <div id="main">
      <Nav />
      <div className="ContentRight">
        <Header className={isHeaderFixed ? "FixedHeader" : ""} />
        <div
          style={{
            backgroundImage: `url(${BGObito})`,
          }}
          className="Artist"
        >
          <div className="VerificationArtist">
            <div className="IconVer">
              <img src={TichXanh} alt="" />
            </div>
            <div>
              <p>Nghệ sĩ được xác minh</p>
            </div>
          </div>
          <div className="NameArtist">
            <h1>Obito</h1>
          </div>
          <div className="MonthlyListeners">
            <p>1.111.341 người nghe hằng tháng</p>
          </div>

          <div className="DetailsPlay">
            <div className="DetailsPlayIcon">
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
          <h1>Phổ biến</h1>
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

        <div className="DetailsFooter">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Artist;
