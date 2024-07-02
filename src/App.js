import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { setClientToken } from "../src/Content/Spolify/Spolify.js";
import "./App.css";
import HomePage from "./Content/HomePage/HomePage";
import Details from "./Content/Details/Details";
import Search from "./Content/Search/Search";
import Artist from "./Content/Artist/Artist";
import Login from "./Content/Login/Login";
import Header from "./Content/HeaderContent/Header";

function App() {
  const authEndpoint = "https://accounts.spotify.com/authorize?";
  const clientId = "10ff71b2181a4ee19909431870ef03f4";
  const redirectUri = "http://localhost:3000";
  const response_type = "token";
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.localStorage.setItem("token", token);
      window.location.hash = "";
    }

    setToken(token);
    setClientToken(token);
  }, [token]);
  return !token ? (
    <Login />
  ) : (
    <>
      {/* <button onClick={handleLogout}>LogOut</button> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/search" element={<Search />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
