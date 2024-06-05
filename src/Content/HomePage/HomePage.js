import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Details from "../Details/Details";
import Header from "../HeaderContent/Header";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import IconPlay from "../../assets/img/Icon/IconPlay.png";
import HieuThu2 from "../../assets/img/ImgContentFY/HieuThu2.png";
import ImgContentFy1 from "../../assets/img/ImgContentFY/Obito.jpg";
import ImgContentFy2 from "../../assets/img/ImgContentFY/Flower.png";
import ImgContentFy3 from "../../assets/img/ImgContentFY/VSTN.png";
import ImgContentFy4 from "../../assets/img/ImgContentFY/Thuan.png";
import ImgContentFy5 from "../../assets/img/ImgContentFY/Banhcam.png";
import ImgContentFy6 from "../../assets/img/ImgContentFY/Chaemi.png";
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

  const contentData = [
    {
      img: ImgContentFy1,
      name: "Đánh đổi",
      backgroundColor: "rgb(224, 96, 96)",
    },
    {
      img: ImgContentFy2,
      name: "HIDDEN LOVE",
      backgroundColor: "rgb(50,205,50)",
    },
    {
      img: ImgContentFy3,
      name: "Vì sao thế nhỉ!",
      backgroundColor: "rgb(128, 0, 128)",
    },
    {
      img: ImgContentFy4,
      name: "Thuần Podcast",
      backgroundColor: "rgb(80, 40, 240)",
    },
    {
      img: ImgContentFy5,
      name: "Bánh cam & stories",
      backgroundColor: "rgb(255, 165, 0)",
    },
    {
      img: ImgContentFy6,
      name: "Chamie Podcast",
      backgroundColor: "rgb(255, 218, 185)",
    },
  ];

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

        <>
          <div
            className="ForYou"
            style={{
              backgroundColor:
                hoveredIndex !== null
                  ? contentData[hoveredIndex].backgroundColor
                  : "#121212",
              backgroundImage:
                hoveredIndex !== null
                  ? `linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212),url(${contentData[hoveredIndex].img})`
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
                {contentData.map((content, index) => (
                  <div
                    key={index}
                    className="ContentFY "
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="ImgContentFY">
                      <img src={content.img} alt="" />
                    </div>
                    <div className="NameContentFy">
                      <p>{content.name}</p>

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
              <div className="ElementFavorite" onClick={handleNavigate}>
                <div className="ImgFavorite">
                  <img src={HieuThu2} alt="" />
                </div>
                <div className="NameFavorite">
                  <div className="TitleName">Ai Cũng Phải Bắt Đ..</div>
                  <div className="AuthorName">HIEUTHUHAI</div>
                </div>
              </div>

              <div className="ElementFavorite" onClick={handleNavigate}>
                <div className="ImgFavorite">
                  <img src={ImgPhatGan11} alt="" />
                </div>
                <div className="NameFavorite">
                  <div className="TitleName">GOLDEN</div>
                  <div className="AuthorName">Jung Kook</div>
                </div>
              </div>

              <div className="ElementFavorite" onClick={handleNavigate}>
                <div className="ImgFavorite">
                  <img src={ImgPhatGan10} alt="" />
                </div>
                <div className="NameFavorite">
                  <div className="TitleName">99%</div>
                  <div className="AuthorName">MCK</div>
                </div>
              </div>

              <div className="ElementFavorite" onClick={handleNavigate}>
                <div className="ImgFavorite">
                  <img src={ImgPhatGan9} alt="" />
                </div>
                <div className="NameFavorite">
                  <div className="TitleName">0 AI NGHĨ</div>
                  <div className="AuthorName">Wxrdie</div>
                </div>
              </div>
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
  );
}

export default HomePage;
