import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import SearchCategory from "./SearchCategory";
import Nav from "../Nav/Nav";
import Header from "../HeaderContent/Header";
import Footer from "../Footer/Footer";
import KhongTheSay from "../../assets/img/ImgContentFY/KhongTheSay.png";
import NguMotMinh from "../../assets/img/ImgContentFY/NguMotMinh.png";
import ThanhPho from "../../assets/img/ImgContentFY/Thanhpho.png";
import TuSu from "../../assets/img/ImgContentFY/TuSu.png";
import HiddenLuv from "../../assets/img/ImgContentFY/HiddenLuv.png";
import ImgPhatGan3 from "../../assets/img/ImgContentFY/PhatGan3.png";

const Search = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/details");
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
        <div className="SearchInput">
          <form>
            <input
              placeholder="Bạn muốn phát nội dung gì?"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={isFocused ? "input-focused" : ""}
            />
          </form>

          <div className="IconSearchInput">
            <span>
              <i
                className={`fa-solid fa-magnifying-glass ${
                  isFocused ? "focused" : ""
                }`}
              ></i>
            </span>
          </div>
        </div>

        <div className="TitleSearch">
          <div className="TitleSe">
            <h1>Các tìm kiếm gần đây</h1>
          </div>
        </div>

        <div className="MusicProsperity">
          <div onClick={handleNavigate} className="SongsProsperity">
            <div className="SongsProsperityImg">
              <img src={ThanhPho} alt="" />
            </div>

            <div className="SongsProsperityName">
              <div className="Name&ActorSongProsperity">
                <div className="NameSongProsperity">
                  <p>Thành phố chứa..</p>
                </div>
                <div className="ActorSongProsperity">
                  <p>iMAZE,ngtrinh</p>
                </div>
              </div>
            </div>
          </div>

          <div onClick={handleNavigate} className="SongsProsperity">
            <div className="SongsProsperityImg">
              <img src={TuSu} alt="" />
            </div>

            <div className="SongsProsperityName">
              <div className="Name&ActorSongProsperity">
                <div className="NameSongProsperity">
                  <p>Tự sự</p>
                </div>
                <div className="ActorSongProsperity">
                  <p>Obito</p>
                </div>
              </div>
            </div>
          </div>

          <div onClick={handleNavigate} className="SongsProsperity">
            <div className="SongsProsperityImg">
              <img src={HiddenLuv} alt="" />
            </div>

            <div className="SongsProsperityName">
              <div className="Name&ActorSongProsperity">
                <div className="NameSongProsperity">
                  <p>HiddenLuv</p>
                </div>
                <div className="ActorSongProsperity">
                  <p>16Typh</p>
                </div>
              </div>
            </div>
          </div>

          <div onClick={handleNavigate} className="SongsProsperity">
            <div className="SongsProsperityImg">
              <img src={ImgPhatGan3} alt="" />
            </div>

            <div className="SongsProsperityName">
              <div className="Name&ActorSongProsperity">
                <div className="NameSongProsperity">
                  <p>Bình thường hoá</p>
                </div>
                <div className="ActorSongProsperity">
                  <p>Vanesa</p>
                </div>
              </div>
            </div>
          </div>

          <div onClick={handleNavigate} className="SongsProsperity">
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
        </div>

        <div className="TitleSearch">
          <div className="TitleSe">
            <h1>Duyệt tìm tất cả</h1>
          </div>
        </div>

        <SearchCategory />

        <div className="DetailsFooter">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Search;
