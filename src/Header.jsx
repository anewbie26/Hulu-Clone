import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <HomeIcon />
          <p>Home</p>
        </div>

        <div className="header__icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibraryIcon />
          <p>Collection</p>
        </div>
        <div className="header__icon">
          <SearchIcon />
          <p>Search</p>
        </div>
        <div className="header__icon">
          <PersonOutlineIcon />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/800px-Hulu_Logo.svg.png"
        alt="logo"
      />
    </div>
  );
};

export default Header;
