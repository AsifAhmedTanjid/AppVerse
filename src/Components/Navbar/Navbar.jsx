import React from "react";
import logo from "../../assets/logo.png";
import githublogo from "../../assets/github-mark-white.png" 
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-[20px] md:px-[80px] ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>App</a>
              </li>
              <li>
                <a>Installation</a>
              </li>
            </ul>
          </div>
          {/* <div> */}
          
          <Link to='/' className="font-bold md:text-2xl text-sm bg-clip-text text-transparent bg-gradient-to-br from-[#632EE3] to-[#9F62F2] flex hover:cursor-pointer"><img src={logo} alt="" className="w-[40px] mr-2" /> AppVerse</Link>
          {/* </div> */}
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-[16px] gap-8">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>App</a>
            </li>
            <li>
              <a>Installation</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">
           <img src={githublogo} alt="" className="w-[20px] mr-2" /> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
