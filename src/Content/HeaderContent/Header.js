import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(+1);
  };

  return (
    <div>
      <div className="Header">
        <div className="IconHeader">
          <i onClick={goBack} class="fa-solid fa-circle-chevron-left"></i>
          <i onClick={goForward} class="fa-solid fa-circle-chevron-right"></i>
        </div>

        <div className="User">
          <div className="DownLoad">
            <div>
              <i class="fa-solid fa-circle-arrow-down"></i>
            </div>
            <div>
              <a href="https://www.spotify.com/vn-vi/download/other/">
                Cài đặt ứng dụng
              </a>
            </div>
          </div>
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
