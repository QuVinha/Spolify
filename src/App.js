import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Content/HomePage/HomePage";
import Details from "./Content/Details/Details";
import Search from "./Content/Search/Search";
import Artist from "./Content/Artist/Artist";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/search" element={<Search />} />
        <Route path="/artist" element={<Artist />} />
      </Routes>
    </>
  );
}

export default App;
