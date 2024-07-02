import "./Header.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import apiClient, { setClientToken } from "../../Content/Spolify/Spolify.js";

function Header() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(+1);
  };

  const goLogin = () => {
    navigate("/login");
  };

  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setClientToken(token); // Thiết lập token cho apiClient

      apiClient
        .get("/me")
        .then((response) => {
          if (response.data.images && response.data.images.length > 0) {
            setImage(response.data.images[0].url); // Cập nhật ảnh profile người dùng nếu có
          }
        })
        .catch((error) => {
          console.error("Error fetching data from Spotify API", error);
        });
    }
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div className="Header">
        <div className="IconHeader">
          <i onClick={goBack} className="fa-solid fa-circle-chevron-left"></i>
          <i
            onClick={goForward}
            className="fa-solid fa-circle-chevron-right"
          ></i>
        </div>

        <div className="User">
          <div className="DownLoad">
            <div>
              <i className="fa-solid fa-circle-arrow-down"></i>
            </div>
            <div>
              <a href="https://www.spotify.com/vn-vi/download/other/">
                Cài đặt ứng dụng
              </a>
            </div>
          </div>

          <div className="UserIcon" onClick={toggleDropdown}>
            <img src={image} className="profile-img" alt="profile" />
            {dropdownOpen && (
              <ul className="DropdownContent">
                <li>
                  <a href="https://www.spotify.com/vn-vi/account/overview/?utm_source=spotify&utm_medium=menu&utm_campaign=your_account">
                    {" "}
                    Tài khoản
                  </a>
                  <a href="#"> Hồ sơ</a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => {
                      // Handle logout functionality
                      localStorage.removeItem("token");
                      window.location.reload();
                    }}
                    style={{ paddingBottom: "10px" }}
                  >
                    Đăng xuất
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
