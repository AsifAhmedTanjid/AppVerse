import React from "react";
import heroImg from "../../assets/hero.png";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="bg-[#F5F5F5] pt-16 md:pt-20 ">
      <div className="text-center">
        <h1 className="text-[#001931] font-semibold text-4xl sm:text-5xl md:text-[72px] leading-tight mb-4">
          We Build <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] font-mono text-base sm:text-lg md:text-xl max-w-[900px] mx-auto mb-8 px-2">
          At AppVerse, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <NavLink
          to="https://play.google.com/store/apps?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOhHTP3eEAK_55yLouWvhXI6bAfUHpnOwEA&s"
              alt=""
              className="w-[24px] mr-2"
            />
            Google Play
          </button>
        </NavLink>
        <NavLink
          to="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png"
              alt=""
              className="w-[24px] mr-2"
            />
            App Store
          </button>
        </NavLink>
      </div>
      <div className="flex justify-center items-center">
        <img src={heroImg} alt=""  className="w-full max-w-[700px] h-auto object-contain px-4"/>
      </div>
      <div className="text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
        <h1 className="text-5xl font-bold text-center pt-20 pb-10">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-8 sm:gap-0 max-w-[1200px] mx-auto pb-16 text-center text-base font-normal">
          <div>
            <p>Total Downloads</p>
            <h1 className="font-extrabold text-6xl py-4">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <h1 className="font-extrabold text-6xl py-4">906K</h1>
            <p>46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <h1 className="font-extrabold text-6xl py-4">132+</h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
