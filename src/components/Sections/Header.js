import React, { useState } from "react";
import "../Styles/header.css";
import logo_img from "../../Assets/logo_img.png";
import ArrowRight from "../../Assets/ArrowRight (1).png";

const Header = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo_img} alt="Logo" />
        Founder's Friday
      </div>
      <div className="header-details">
        <nav className="nav">
          <a href="#about">Home</a>
          <a href="#about">About Us</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <button
          className={`register-btn ${isAnimating ? "active" : ""}`}
          onClick={handleButtonClick}
        >
          Register <img src={ArrowRight} alt="Arrow" />
        </button>
      </div>
    </header>
  );
};

export default Header;
