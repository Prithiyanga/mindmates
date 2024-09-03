import React from "react";
import { FaUser } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "./Media/Logo.png";

const Header = () => {
  function changeNavbarColor() {
    let head = document.getElementById("mm-header");
    let tb = document.getElementById("mm-taskbar");
    if (window.scrollY >= 50) {
      head.style.backgroundColor = "#FFFFFF";
      head.style.boxShadow = "0px 2px 5px grey";
      head.style.transition = "1s";
      tb.style.backgroundColor = "rgb(0,0,0,0.2)";
      tb.style.color = "black";
    } else {
      head.style.backgroundColor = "transparent";
      head.style.boxShadow = "none";
      head.style.transition = "1s";
      tb.style.backgroundColor = "rgba(241, 241, 241, 0.8)";
      tb.style.color = "white";
    }
  }

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className="header" id="mm-header">
      <div className="logo-container">
        <img src={Logo} alt="Mind Mate Logo" className="header-logo" />
      </div>
      <div className="header-options">
        <Link to="/" className="header-option">
          Home
        </Link>
        <Link to="/AboutMindMate" className="header-option">
          About Us
        </Link>
        <Link to="/InsightMindMateReportInput" className="header-option">
          Insight
        </Link>
        <Link to="/MindMateCourseOfferings" className="header-option">
          Learn
        </Link>
        <Link to="/MindMateHelp" className="header-option">
          Help
        </Link>
      </div>
      <div className="taskbar" id="mm-taskbar">
        <IoNotifications className="taskbar-icon" />
        <hr className="taskbar-separator" />
        <FaUser className="taskbar-icon" />
      </div>
    </div>
  );
};

export default Header;
