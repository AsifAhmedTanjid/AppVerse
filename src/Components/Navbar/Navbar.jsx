import React from "react";
import logo from "../../assets/logo.png";
import githublogo from "../../assets/github-mark-white.png";
import { Link, NavLink } from "react-router";

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
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] font-bold"
                      : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-[#632EE3] hover:to-[#9F62F2]"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Apps"
                  className={({ isActive }) =>
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] font-bold"
                      : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-[#632EE3] hover:to-[#9F62F2]"
                  }
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Installation"
                  className={({ isActive }) =>
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] font-bold"
                      : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-[#632EE3] hover:to-[#9F62F2]"
                  }
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <div> */}

          <Link
            to="/"
            className="font-bold md:text-2xl text-sm bg-clip-text text-transparent bg-gradient-to-br from-[#632EE3] to-[#9F62F2] flex hover:cursor-pointer items-center"
          >
            <img src={logo} alt="" className="w-[40px] mr-2" /> AppVerse
          </Link>
          {/* </div> */}
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-[16px] gap-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] font-bold border-b-2 border-[#632EE3]"
                    : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-[#632EE3] hover:to-[#9F62F2] "
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Apps"
                className={({ isActive }) =>
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] font-bold border-b-2 border-[#632EE3]"
                    : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-[#632EE3] hover:to-[#9F62F2] "
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Installation"
                className={({ isActive }) =>
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] font-bold border-b-2 border-[#632EE3]"
                    : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-[#632EE3] hover:to-[#9F62F2] "
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink
            to={`https://github.com/AsifAhmedTanjid`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-[16px]"
          >
            <img src={githublogo} alt="" className="w-[20px] mr-2" /> Contribute
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
