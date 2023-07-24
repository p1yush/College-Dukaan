import { styled } from "styled-components";
import { AiFillCamera } from "react-icons/ai";
import { CgClose, CgMenu } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  return (
    <Wrapper>
      <div className="header-container">
        <div className={menuIcon ? "header-top menu-open flex flex-wrap items-center justify-between": "header-top flex flex-wrap items-center justify-between"}>
          <div className="header-left">
            <a href="/" className="flex items-center">
              <img src="images/logo.png" className="w-32 mr-3" alt="Logo" />
            </a>
          </div>

          <div className="header-right">
            <nav className={menuIcon ? "navbar active" : "navbar"}>
              <ul className="navbar-lists font-medium flex p-4 ">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="navbar-link block py-2 pl-3 pr-4 hover:text-blue-700"
                    aria-current="page"
                    onClick={() => setMenuIcon(false)}
                    activeClass="active"
                    smooth={true}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="navbar-link block py-2 pl-3 pr-4 hover:text-blue-700"
                    onClick={() => setMenuIcon(false)}
                    activeClass="active"
                    smooth={true}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="navbar-link block py-2 pl-3 pr-4 hover:text-blue-700"
                    onClick={() => setMenuIcon(false)}
                    activeClass="active"
                    smooth={true}
                    duration={500}
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="navbar-link block py-2 pl-3 pr-4 hover:text-blue-700"
                    onClick={() => setMenuIcon(false)}
                  >
                    Messages
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="navbar-link block py-2 pl-3 pr-4 hover:text-blue-700"
                    onClick={() => setMenuIcon(false)}
                  >
                    Login
                  </NavLink>
                </li>
              </ul>

              {/* two button for open and close of menu */}
            </nav>

            <div className="header-btn">
              <button
                type="button"
                className="sell-btn flex justify-center items-center"
                onClick={() => setMenuIcon(false)}
              >
                <AiFillCamera className="text-xl mr-2" />
                <NavLink to="/">Sell Now</NavLink>
              </button>
            </div>

            <div className="humberger-menu md:hidden pl-5">
              <CgMenu
                name="menu-outline"
                className="mobile-nav-icon"
                onClick={() => setMenuIcon(true)}
              />
            </div>

            <div className="close-menu md:hidden">
              <CgClose
                name="close-outline"
                className="mobile-nav-icon close-outline"
                onClick={() => setMenuIcon(false)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={menuIcon ? "offcanvas-backdrop fade show" :"hidden offcanvas-backdrop fade show"}></div>
    </Wrapper>
  );
};
const Wrapper = styled.header`
  position: relative;
  width: 100vw;
  height: auto;
  padding: 20px 0;
  background: #fbf5e8;
  box-shadow: 0 4px 4px #00000000;
  .header-container {
    padding: 0 3rem;
  }

  .header-right {
    display: flex;
    align-items: center;
    .navbar {
      li {
        cursor: pointer;
        font-size: 1.2rem;
      }
    }
    .sell-btn {
      border: 3px solid #ff5656;
      color: #ff5656;
      font-size: 1rem;
      border-radius: 40px;
      font-weight: bold;
      padding: 0px 12px;
      height: 40px;
      min-width: 40px;
      &:hover {
        background-color: #ff5656;
        color: white;
      }
    }
  }
  .close-menu {
    position: fixed;
    top: 12px;
    opacity: 0;
    visibility: hidden;
    right: 29px;
    z-index: -10;
  }
  .menu-open .close-menu {
    opacity: 1;
    visibility: visible;
    z-index: 9999;
}
.menu-open .humberger-menu .mobile-nav-icon {
    opacity: 0;
}
.mobile-nav-icon{
  font-size: 2rem;
}

  @media (max-width: 980px) {
    .header-container {
      padding: 0 2rem;
    }
    .offcanvas-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 998;
      width: 100vw;
      height: 100vh;
      background-color: #000;
      opacity: 0.5;
    }
  }

  @media only screen and (max-width: 767px) {
    .header-container .navbar {
      position: absolute;
    }
    .navbar-lists {
      width: 60vw;
      height: 100vh;
      position: fixed;
      top: 0;
      right: -61vw;
      z-index: 999;
      padding: 55px;
      background: #fff;
      transition: all 0.8s cubic-bezier(0.77, 0.2, 0.05, 1);
      display: block;
      overflow-y: auto;
    }
    .menu-open .navbar ul {
    right: 0;
    }
  }
`;
