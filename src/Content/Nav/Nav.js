import "./Nav.css";
import Search from "../Search/Search";
import { useNavigate } from "react-router-dom";
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

  return (
    <div>
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
            <div className="LiContent">
              <div className="FavoriteSong">
                <div className="FavoriteLeft">
                  <div className="ImgFavoriteSong">
                    <img src={ImgPhatGan6} alt="" />
                  </div>
                </div>

                <div className="FavoriteRight">
                  <div className="Name&ActorSong">
                    <div className="NameFSong">
                      <p>Kể cho tôi nghe</p>
                    </div>
                    <div className="ActorFSong">
                      <p>Radio Giữ Kỉ Niệm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="LiContent">
              <div className="FavoriteSong">
                <div className="FavoriteLeft">
                  <div className="ImgFavoriteSong">
                    <img src={ImgPhatGan7} alt="" />
                  </div>
                </div>

                <div className="FavoriteRight">
                  <div className="Name&ActorSong">
                    <div className="NameFSong">
                      <p>Tree ở đây</p>
                    </div>
                    <div className="ActorFSong">
                      <p>Thuỳ Tree</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="LiContent">
              <div className="FavoriteSong">
                <div className="FavoriteLeft">
                  <div className="ImgFavoriteSong">
                    <img src={ImgPhatGan9} alt="" />
                  </div>
                </div>

                <div className="FavoriteRight">
                  <div className="Name&ActorSong">
                    <div className="NameFSong">
                      <p>0 ai nghĩ</p>
                    </div>
                    <div className="ActorFSong">
                      <p>Wxrdie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="LiContent">
              <div className="FavoriteSong">
                <div className="FavoriteLeft">
                  <div className="ImgFavoriteSong">
                    <img src={ImgPhatGan10} alt="" />
                  </div>
                </div>

                <div className="FavoriteRight">
                  <div className="Name&ActorSong">
                    <div className="NameFSong">
                      <p>99%</p>
                    </div>
                    <div className="ActorFSong">
                      <p>MCK - aka Nger</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="LiContent">
              <div className="FavoriteSong">
                <div className="FavoriteLeft">
                  <div className="ImgFavoriteSong">
                    <img src={ImgContentFy7} alt="" />
                  </div>
                </div>

                <div className="FavoriteRight">
                  <div className="Name&ActorSong">
                    <div className="NameFSong">
                      <p>Viết Chữa Lành</p>
                    </div>
                    <div className="ActorFSong">
                      <p>Uriting theraphy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="LiContent">
              <div className="FavoriteSong">
                <div className="FavoriteLeft">
                  <div className="ImgFavoriteSong">
                    <img src={ImgContentFy9} alt="" />
                  </div>
                </div>

                <div className="FavoriteRight">
                  <div className="Name&ActorSong">
                    <div className="NameFSong">
                      <p>Mây kể chuyện</p>
                    </div>
                    <div className="ActorFSong">
                      <p>M.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="LiContent">
              <div className="FavoriteSong">
                <div className="FavoriteLeft">
                  <div className="ImgFavoriteSong">
                    <img src={ImgContentFy4} alt="" />
                  </div>
                </div>

                <div className="FavoriteRight">
                  <div className="Name&ActorSong">
                    <div className="NameFSong">
                      <p>Thuần</p>
                    </div>
                    <div className="ActorFSong">
                      <p>Thuần - Podcast</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="LiContent">
              <div className="FavoriteSong">
                <div className="FavoriteLeft">
                  <div className="ImgFavoriteSong">
                    <img src={ImgPhatGan11} alt="" />
                  </div>
                </div>

                <div className="FavoriteRight">
                  <div className="Name&ActorSong">
                    <div className="NameFSong">
                      <p>GOLDEN</p>
                    </div>
                    <div className="ActorFSong">
                      <p>Jung Kook</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
